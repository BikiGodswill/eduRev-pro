import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { BiTrendingUp } from "react-icons/bi";
import { LuBrain, LuLayoutDashboard, LuSettings } from "react-icons/lu";

export default function SideBar() {
  return (
    <aside className="bg-secondary relative row-span-full flex-col gap-[3.2rem] p-4">
      <Logo />
      <nav className="mt-12 flex flex-col gap-2">
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/student/dashboard"
        >
          <LuLayoutDashboard /> My Dashboard
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/student/performance"
        >
          <BiTrendingUp /> Performance
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/student/recommendations"
        >
          {" "}
          <LuBrain /> Recommendations
        </NavLink>
        <NavLink
          className="text-primary/80 hover:bg-secondary-500 hover:text-primary flex items-center gap-2 rounded-xl p-2 transition"
          to="/student/settings"
        >
          <LuSettings className="" /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}
