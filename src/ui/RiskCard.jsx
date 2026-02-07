// components/DashboardCard.jsx
import React from "react";

export default function RiskCard({
  title,
  children,
  className = "",
  titleClassName = "",
}) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}>
      {title && (
        <h3
          className={`mb-4 text-lg font-bold text-gray-900 ${titleClassName}`}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
