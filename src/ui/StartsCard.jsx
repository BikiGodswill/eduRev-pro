// components/StatsCard.jsx
import React from "react";

export default function StatsCard({
  percentage = 85,
  description,
  title = "Recommendation Rate",
}) {
  // Calculate the circumference for the circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative mb-6 h-40 w-40">
        {/* Background circle */}
        <svg className="h-full w-full -rotate-90 transform">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#3B82F6"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Percentage text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {percentage}%
            </div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">{title}</h4>
        <p className="mb-4 text-gray-600">
          {description ||
            `${percentage}% of students who followed recommendations improved by +1 grade`}
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
            <span>Following Recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
