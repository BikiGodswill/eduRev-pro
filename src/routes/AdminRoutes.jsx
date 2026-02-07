import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../ui/AdminLayout";
import AdminDashboard from "../features/admin/AdminDashboard";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}
