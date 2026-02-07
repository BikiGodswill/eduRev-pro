import React from "react";
import { HiUser } from "react-icons/hi2";

export default function DashboardCard({ title, total, description, icon }) {
  return (
    <div className="m-5 flex w-xs justify-between rounded-lg border border-gray-200 bg-gray-100 p-6">
      <span className="">
        <h6 className="text-gray-600">{title}</h6>
        <h2 className="text-lg font-bold">{total}</h2>
        <p className="text-green-600">{description}</p>
      </span>
      <div className="h-fit bg-gray-200">{icon}</div>
    </div>
  );
}
