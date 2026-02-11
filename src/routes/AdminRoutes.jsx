import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../ui/AdminLayout";
import AdminDashboard from "../features/admin/AdminDashboard";
import AdminOverview from "../features/admin/AdminOverview";
import AdminSettings from "../features/admin/AdminSettings";
import AdminTeachers from "../features/admin/AdminTeachers";
import AdminStudents from "../features/admin/AdminStudents";
import AdminReports from "../features/admin/AdminReports";
import { RoleGuard } from "./RoleGuard";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <AdminLayout />
          </RoleGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="teachers" element={<AdminTeachers />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="overview" element={<AdminOverview />} />
      </Route>
    </Routes>
  );
}
