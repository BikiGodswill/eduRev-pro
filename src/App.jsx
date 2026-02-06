import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import PageNotFound from "./pages/PageNotFound";
import AdminDashboard from "./features/admin/AdminDashboard";
import TeacherDashboard from "./features/teacher/TeacherDashboard";
import StudentDashboard from "./features/students/StudentDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/admin">
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="/teacher">
          <Route index element={<TeacherDashboard />} />
        </Route>

        <Route path="/student">
          <Route index element={<StudentDashboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}