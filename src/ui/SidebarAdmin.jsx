import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { LuLayoutDashboard, LuMic, LuSettings } from "react-icons/lu";
import { FaEye, FaPeopleGroup, FaPeopleLine, FaUsers } from "react-icons/fa6";

export default function SidebarAdmin() {
  return (
    <aside className="bg-secondary relative row-span-full flex-col gap-[3.2rem] p-4">
      <Logo />
      <nav className="mt-12 flex flex-col gap-2">
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin"
        >
          <LuLayoutDashboard /> My Dashboard
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin/overview"
        >
          <FaEye /> Overview
        </NavLink>

        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin/students"
        >
          <FaUsers /> Students
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin/students"
        >
          <FaPeopleLine /> Teachers
        </NavLink>

        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin/settings"
        >
          <LuSettings className="" /> Settings
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/admin/settings"
        >
          <LuMic className="" /> reports
        </NavLink>
      </nav>
    </aside>
  );
}
