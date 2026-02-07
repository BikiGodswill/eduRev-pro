import React from "react";

export default function RiskLevel({ level }) {
  const risk = level ? String(level).trim().toLocaleLowerCase() : "";

  return (
    <div className={`p-2`}>
      <p
        className={`font-medium ${risk === "high" ? "text-red-500" : ""} ${risk === "medium" ? "text-yellow-300" : ""} ${risk === "low" ? "text-green-600" : ""} ${!["high", "medium", "low"].includes(risk) ? "text-gray-500" : ""}`}
      >
        {level}
      </p>
    </div>
  );
}
