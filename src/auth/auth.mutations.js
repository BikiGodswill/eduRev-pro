import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi, signupApi, createUserApi } from "./auth.api";

const BASE_URL = "https://edurev-pro.onrender.com/api/v1/users";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, matricule }) => {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, matricule }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    },

    onSuccess: (data) => {
      // Store user globally
      queryClient.setQueryData(["currentUser"], data.data.user);

      // Store token if backend expects Bearer usage
      localStorage.setItem("token", data.token);
    },
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: signupApi,
  });
}

export function useCreateLecturer() {
  return useMutation({
    mutationFn: (data) => createUserApi({ ...data, role: "lecturer" }),
  });
}
