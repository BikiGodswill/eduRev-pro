import { Navigate } from "react-router";
import { useCurrentUser } from "../hooks/useCurrentUser";

export function RoleGuard({ allowedRoles, children }) {
  const { data: user } = useCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/*" replace />;
  }

  return children;
}
