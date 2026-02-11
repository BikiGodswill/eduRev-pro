import React from "react";
import { HiUser } from "react-icons/hi2";

export default function DashboardCard({ title, total, description, icon }) {
  return (
    <div className="m-5 flex w-xs flex-col justify-between rounded-lg border border-gray-200 bg-gray-100 p-6">
      <div className="flex items-center justify-between">
        <h6 className="text-lg text-gray-600">{title}</h6>
        <div className="h-fit rounded-full bg-gray-200 p-1">{icon}</div>
      </div>
      <h2 className="text-3xl font-bold">{total}</h2>
      <p className="text-sm text-green-600">{description}</p>
    </div>
  );
}
