import React from "react";
import DashboardCard from "../../ui/DashboardCard";
import { HiBookOpen, HiUser } from "react-icons/hi2";
import RiskLevel from "../../ui/RiskLevel";
import { FaBrain, FaCircle, FaSafari } from "react-icons/fa6";
import ChartCart from "../../ui/ChartCart";
import ChartLayout from "../../ui/ChartLayout";
import RiskLayout from "../../ui/RiskLayout";

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
    <>
      <header className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Academic Dashboard
        </h1>
        <p className="text-gray-600">
          Visualize performance data with interactive charts
        </p>
      </header>
      <main>
        <section className="flex justify-between">
          {dashboards.map((dashboard) => (
            <DashboardCard
              title={dashboard.title}
              total={dashboard.total}
              description={dashboard.description}
              icon={dashboard.icon}
              key={dashboard.id}
            />
          ))}
        </section>
        <section className="">
          <ChartLayout />
          <RiskLayout />
        </section>
      </main>
    </>
  );
}
