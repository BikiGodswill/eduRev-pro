import React from "react";
import {
  FiBookOpen,
  FiTarget,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import Title from "../../ui/Title";

const recommendations = [
  {
    title: "Advanced ML Research",
    description: "Join the graduate ML research group for deeper exposure",
    type: "academic",
    status: "accepted",
  },
  {
    title: "Visual Study Materials",
    description: "Use diagram-heavy resources for Statistics",
    type: "resource",
    status: "completed",
    impact: 12,
  },
];

const typeIcons = {
  academic: FiBookOpen,
  behavioral: FiTarget,
  resource: HiSparkles,
};

const statusIcons = {
  accepted: FiAlertCircle,
  completed: FiCheckCircle,
};

const statusColors = {
  accepted: "bg-blue-800 text-primary",
  completed: "bg-green-700 text-primary",
};

export default function StudentRecommendation() {
  return (
    <div>
      <Title />
      <div className="bg-primary-dark mx-auto space-y-4 rounded-xl p-4">
        <div className="mb-2 flex items-center gap-2 text-stone-800">
          <HiSparkles className="h-5 w-5" />
          <h2 className="text-lg font-semibold">AI-Powered Recommendations</h2>
        </div>
        <p className="mb-4 text-sm text-stone-600">
          Based on your performance patterns, our AI engine has generated
          personalized recommendations.
        </p>

        {/* Recommendation Cards */}
        {recommendations.map((rec, idx) => {
          const TypeIcon = typeIcons[rec.type];
          const StatusIcon = statusIcons[rec.status];

          return (
            <div
              key={idx}
              className="bg-secondary/85 flex items-start gap-3 rounded-lg p-4"
            >
              {/* Type Icon */}
              <div className="bg-primary/90 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <TypeIcon className="text-accent h-4 w-4" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">
                    {rec.title}
                  </h4>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-xs ${statusColors[rec.status]}`}
                  >
                    <StatusIcon className="h-3 w-3" />
                    {rec.status}
                  </span>
                </div>
                <p className="text-xs text-stone-200">{rec.description}</p>
                {rec.impact && (
                  <p className="mt-1 text-xs font-medium text-green-400">
                    ↑ {rec.impact}% improvement observed
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
