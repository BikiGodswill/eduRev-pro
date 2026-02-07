import React from "react";
import RiskLevel from "./RiskLevel";

export default function Recommendation({ level, icon, title, description }) {
  return (
    <div>
      <span>{icon}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <RiskLevel level={level} />
    </div>
  );
}
