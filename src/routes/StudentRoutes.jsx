import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import StudentLayout from "../ui/StudentLayout";
import StudentDashboard from "../features/students/StudentDashboard";
import StudentPerformance from "../features/students/StudentPerformance";
import StudentRecommendation from "../features/students/StudentRecommendation";
import StudentSettings from "../features/students/StudentSettings";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="performance" element={<StudentPerformance />} />
        <Route path="recommendations" element={<StudentRecommendation />} />
        <Route path="settings" element={<StudentSettings />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
