import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const BASE_URL = "https://edurev-pro.onrender.com/api/v1/users";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const authenticate = async (formData, isSignup) => {
    if (loading) return;
    setLoading(true);

    try {
      const url = isSignup ? `${BASE_URL}/signup` : `${BASE_URL}/login`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      toast.success(isSignup ? "Signup successful" : "Login successful");
      navigate("/student");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { authenticate, loading };
}
