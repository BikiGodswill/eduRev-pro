// hooks/useAuthQuery.js
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://edurev-pro.onrender.com/api/v1";

export function useAuthQuery() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token");

      const res = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Invalid token");
      }

      const data = await res.json();

      /*
        IMPORTANT:
        We are NOT identifying the user here.
        We only use this call to confirm the token is valid.
        The actual user comes from login response.
      */

      return true; // token is valid
    },
    retry: false,
  });
}
