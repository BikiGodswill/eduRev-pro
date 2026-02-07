import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../ui/SideBar.jsx";
import NavBar from "../../ui/NavBar.jsx";
import MainContainer from "../../ui/MainContainer.jsx";
import StudentStats from "../../ui/StudentStats.jsx";
import StudentPerfomanceChart from "../../ui/StudentPerfomanceChart.jsx";

export default function StudentDashboard() {
  return (
    <section>
      <div className="mb-2">
        <h2 className="text-2xl font-bold">Welcome, Royal Tk</h2>
        <p className="text-stone-600">
          Track your performance and AI-powered recommendations
        </p>
      </div>
      <StudentStats />
      <StudentPerfomanceChart />
    </section>
  );
}
