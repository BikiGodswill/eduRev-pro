// components/ChartComponent.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function ChartCart({
  title = "",
  data = [],
  labels = [],
  type = "line",
  aspectRatio = 2,
  showLegend = false,
  showGrid = true,
  fill = false,
  tension = 0.4,
  borderColor = "#3b82f6",
  backgroundColor = "rgba(59, 130, 246, 0.1)",
  pointBackgroundColor = "#3b82f6",
  barBackgroundColor = "#10b981",
  yAxisMin = 0,
  yAxisMax = 100,
  yAxisStep = 25,
  xAxisLabelRotation = 0,
  className = "",
}) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio,
    plugins: {
      legend: {
        display: showLegend,
        position: "top",
      },
      title: {
        display: !!title,
        text: title,
        color: "#111827",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.9)",
        titleColor: "#f9fafb",
        bodyColor: "#f9fafb",
        padding: 12,
        cornerRadius: 6,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: yAxisMin,
        max: yAxisMax,
        ticks: {
          stepSize: yAxisStep,
          color: "#6b7280",
          font: {
            size: 12,
          },
        },
        grid: {
          color: showGrid ? "rgba(229, 231, 235, 0.5)" : "transparent",
        },
      },
      x: {
        ticks: {
          color: "#4b5563",
          font: {
            size: 12,
          },
          maxRotation: xAxisLabelRotation,
          minRotation: xAxisLabelRotation,
        },
        grid: {
          color: showGrid ? "rgba(229, 231, 235, 0.3)" : "transparent",
        },
      },
    },
    elements: {
      line: {
        tension,
        borderWidth: 3,
      },
      point: {
        radius: 5,
        hoverRadius: 7,
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Performance",
        data,
        borderColor,
        backgroundColor:
          type === "line" && fill ? backgroundColor : barBackgroundColor,
        borderWidth: type === "line" ? 3 : 1,
        fill: type === "line" ? fill : false,
        pointBackgroundColor:
          type === "line" ? pointBackgroundColor : undefined,
        pointBorderColor: type === "line" ? "#ffffff" : undefined,
        pointBorderWidth: type === "line" ? 2 : undefined,
        borderRadius: type === "bar" ? 4 : undefined,
      },
    ],
  };

  const ChartType = type === "line" ? Line : Bar;

  return (
    <div className={`rounded-xl bg-white p-6 shadow-lg ${className}`}>
      <div className="h-80">
        <ChartType data={chartData} options={options} />
      </div>
    </div>
  );
}
