import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";
import Recommendation from "./Recommendation";

export default function Recommendations() {
  const recommendations = [
    {
      id: 1,
      tiltle: "Advance Machine Learning",
      description:
        "Based on your strong performance in ML Fundamentals, consider enrolling in the advanced course For: Emma Johnson",
      level: "high",
      icon: <HiBookOpen />,
    },
    {
      id: 2,
      tilte: "Advance Machine Learning",
      description:
        "Access video tutorials and interactive diagrams for Data Structures For: Emma Johnson",
      level: "medium",
      icon: <HiLightBulb />,
    },
  ];

  return (
    <section className="bg-gray-800 w-md">
      <h1>All Recommendations</h1>
      <p>recent personalized recommendations</p>
      {recommendations.map((recommendation) => (
        <Recommendation
          title={recommendation.tilte}
          icon={recommendation.icon}
          level={recommendation.level}
          description={recommendation.description}
        />
      ))}
    </section>
  );
}
