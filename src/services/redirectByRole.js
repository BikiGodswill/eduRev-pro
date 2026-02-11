export function redirectByRole(role, navigate) {
  switch (role) {
    case "admin":
      navigate("/admin/dashboard");
      break;

    case "lecturer":
      navigate("/lecturer/dashboard");
      break;

    case "student":
      navigate("/student/dashboard");
      break;

    default:
      navigate("/");
  }
}
