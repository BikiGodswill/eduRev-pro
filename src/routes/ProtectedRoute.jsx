import { useQueryClient } from "@tanstack/react-query";

function ProtectedRoute({ children, role }) {
  const qc = useQueryClient();
  const isAuth = qc.getQueryData(["auth"]);
  const user = qc.getQueryData(["currentUser"]);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
