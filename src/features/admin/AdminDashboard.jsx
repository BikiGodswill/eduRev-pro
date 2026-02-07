import React from "react";
import DashboardCard from "../../ui/DashboardCard";
import { HiUser } from "react-icons/hi2";
import RiskLevel from "../../ui/RiskLevel";

export default function AdminDashboard() {
  return (
    <main className="flex justify-between">
      <DashboardCard
        title={"Total Students"}
        description={"12% from last semester"}
        total={8}
        icon={<HiUser size={50} />}
      />
      <DashboardCard
        title={"Total Students"}
        description={"12% from last semester"}
        total={8}
        icon={<HiUser size={50} />}
      />
      <RiskLevel level={"low"} />
    </main>
  );
}
