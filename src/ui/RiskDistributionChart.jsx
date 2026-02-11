// components/RiskDistributionChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RiskDistributionChart() {
  const data = {
    labels: ["Low Risk", "Medium Risk", "High Risk"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          "#10B981", // Green for Low Risk
          "#F59E0B", // Yellow for Medium Risk
          "#EF4444", // Red for High Risk
        ],
        borderColor: ["#10B981", "#F59E0B", "#EF4444"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 14,
            weight: "500",
          },
          color: "#4B5563",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        padding: 12,
        cornerRadius: 6,
      },
    },
    cutout: "70%",
  };

  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className="relative h-80">
      <Doughnut data={data} options={options} />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-3xl font-bold text-gray-900 align-middle">{total}%</h4>
          <p className="text-sm text-gray-500">Total Distribution</p>
        </div>
      </div>
    </div>
  );
}
