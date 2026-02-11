// hooks/useAuth.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const BASE_URL = "https://edurev-pro.onrender.com/api/v1";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const authMutation = useMutation({
    mutationFn: async ({ formData, isSignup }) => {
      const url = isSignup ? "/users/signup" : "/users/login";

      const res = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      return data;
    },

    onSuccess: (data, variables) => {
      // 1. Store token
      localStorage.setItem("token", data.token);

      // 2. Store user globally
      queryClient.setQueryData(["currentUser"], data.data.user);

      // 3. Mark auth as valid
      queryClient.setQueryData(["auth"], true);

      toast.success(
        variables.isSignup ? "Signup successful" : "Login successful",
      );

      navigate(data.data.user.role === "admin" ? "/admin" : "/student");
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return {
    authenticate: (formData, isSignup) =>
      authMutation.mutate({ formData, isSignup }),
    loading: authMutation.isPending,
  };
}
