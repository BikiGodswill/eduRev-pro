import React from "react";
import DashboardCard from "../../ui/DashboardCard";
import { HiBookOpen, HiUser } from "react-icons/hi2";
import RiskLevel from "../../ui/RiskLevel";
import { FaBrain, FaCircle, FaSafari } from "react-icons/fa6";

export default function AdminDashboard() {
  const dashboards = [
    {
      id: 1,
      title: "total students",
      description: "12% from last semester",
      total: 8,
      icon: <HiUser size={40} />,
    },
    {
      id: 2,
      title: "Active courses",
      description: "2 new this term",
      total: 6,
      icon: <HiBookOpen size={40} color="#16a249fb" />,
    },
    {
      id: 3,
      title: "All Recomendtions",
      description: "7 total generated",
      total: 6,
      icon: <FaBrain size={40} color="#2baeea" />,
    },
    {
      id: 4,
      title: "Active effectiveness",
      description: "Recommendation impact",
      total: "83%",
      icon: <FaSafari size={40} color="#16a249" />,
    },
  ];
  return (
    <main className="flex justify-between">
      {dashboards.map((dashboard) => (
        <DashboardCard
          title={dashboard.title}
          total={dashboard.total}
          description={dashboard.description}
          icon={dashboard.icon}
        />
      ))}
    </main>
  );
}
