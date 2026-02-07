import React from "react";
import { Route, Routes } from "react-router";
import TeacherLayout from "../ui/TeacherLayout";
import TeacherDashboard from "../features/teacher/TeacherDashboard";

export default function TeacherRoutes() {
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
      </Route>
    </Routes>
  );
}
