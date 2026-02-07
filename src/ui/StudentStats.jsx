import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { LuBrain, LuCheck } from "react-icons/lu";

const statData = [
  {
    title: "3.70",
    description: "Current GPA",
    icon: <FaGraduationCap />,
    badge: "+5%",
  },
  {
    title: "B+",
    description: "Grade",
    icon: <LuCheck />,
    badge: "",
  },
  {
    title: "2",
    description: "Recommendations",
    icon: <LuBrain />,
    badge: "",
  },
];

export default function StudentStats() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {statData.map((stat, index) => (
        <div
          key={index}
          className="bg-primary relative flex flex-col items-start gap-4 rounded-lg border border-stone-300 p-4 px-6"
        >
          <div className="text-accent rounded-full bg-stone-300/60 p-3 text-2xl">
            {stat.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{stat.title}</h3>
            <p className="text-sm text-stone-600">{stat.description}</p>
          </div>
          {stat.badge && (
            <span className="bg-accent/70 text-primary absolute top-6 right-4 ml-auto rounded-full px-2 py-1 text-xs">
              {stat.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
