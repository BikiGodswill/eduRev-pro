import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../ui/SideBar.jsx";
import NavBar from "../../ui/NavBar.jsx";
import MainContainer from "../../ui/MainContainer.jsx";
import StudentStats from "../../ui/StudentStats.jsx";
import StudentPerfomanceChart from "../../ui/StudentPerfomanceChart.jsx";
import Title from "../../ui/Title.jsx";

export default function StudentDashboard() {
  return (
    <section>
      <Title />
      <StudentStats />
      <StudentPerfomanceChart />
    </section>
  );
}
