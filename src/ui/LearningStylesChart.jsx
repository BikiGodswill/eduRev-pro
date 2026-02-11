// components/LearningStylesChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function LearningStylesChart() {
  const data = {
    labels: ["Visual", "Auditory", "Kinesthetic", "Reacting"],
    datasets: [
      {
        label: "Students",
        data: [65, 45, 55, 40],
        backgroundColor: [
          "#3B82F6", // Blue
          "#8B5CF6", // Purple
          "#10B981", // Green
          "#F59E0B", // Yellow
        ],
        borderColor: ["#2563EB", "#7C3AED", "#059669", "#D97706"],
        borderWidth: 1,
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}% of students`,
        },
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        padding: 12,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#6B7280",
          font: {
            size: 12,
          },
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "rgba(229, 231, 235, 0.5)",
        },
        title: {
          display: true,
          text: "Percentage",
          color: "#6B7280",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      x: {
        ticks: {
          color: "#4B5563",
          font: {
            size: 14,
            weight: "500",
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Bar data={data} options={options} />
    </div>
  );
}
