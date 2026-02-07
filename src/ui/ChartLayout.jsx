// App.jsx
import React, { useState } from "react";
import ChartCart from "./ChartCart";

export default function ChartLayout() {
  // Performance Trends Data
  const performanceData = {
    title: "Performance Trends",
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    data: [65, 70, 75, 80, 85, 90, 95, 92],
    type: "line",
    fill: true,
    borderColor: "#3b82f6",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
  };

  // Course Performance Data
  const courseData = {
    title: "Course Performance",
    labels: [
      "Machine Learning",
      "Data Structures",
      "Statistics",
      "Linear Algebra",
      "Algorithms",
      "Databases",
    ],
    data: [85, 78, 92, 88, 81, 95],
    type: "bar",
    barBackgroundColor: "#10b981",
    barBorderColor: "#059669",
    xAxisLabelRotation: 45,
  };

  const [activeChart, setActiveChart] = useState("performance");
  const [chartType, setChartType] = useState("line");

  return (
    <div className="bg-gray-50 p-4 md:p-8">
      <div className="">
        {/* Chart Type Toggle */}
        <div className="mb-8">
          <div className="inline-flex rounded-sm border border-gray-300 p-1">
            <button
              onClick={() => setChartType("line")}
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                chartType === "line"
                  ? "bg-secondary-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Line Charts
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                chartType === "bar"
                  ? "bg-accent/80 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Bar Charts
            </button>
          </div>
        </div>

        {/* Main Charts Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <ChartCart
              {...performanceData}
              type={chartType}
              className="h-full"
            />
          </div>
          <div>
            <ChartCart {...courseData} type={chartType} className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
