import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
);

export default function StudentPerfomanceChart() {
  const data = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [88, 85, 87, 82, 90, 88, 91, 93],
        borderColor: "#38bdf8",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(56,189,248,0.4)");
          gradient.addColorStop(1, "rgba(56,189,248,0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.2)" },
      },
      y: {
        min: 0,
        max: 100,
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.1)" },
      },
    },
  };

  return (
    <article className="bg-primary-dark mt-6">
      <h3 className="mb-1 text-lg font-bold text-stone-800">
        Performance Trends
      </h3>
      <div className="mt-4 h-75">
        <Line data={data} options={options} />
      </div>
    </article>
  );
}
9;
