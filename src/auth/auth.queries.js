import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "./auth.api";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const email = localStorage.getItem("email");
      if (!email) return null;

      const res = await getUsersApi();
      return res.data.find((u) => u.email === email) || null;
    },
    enabled: !!localStorage.getItem("token"),
  });
}
