// App.jsx
import React from "react";
import RiskCard from "./RiskCard";
import RiskDistributionChart from "./RiskDistributionChart";
import StatsCard from "./StartsCard";
import LearningStylesChart from "./LearningStylesChart";

export default function RiskLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Risk Distribution Card */}
          <RiskCard title="Rise Distribution" className="lg:col-span-2">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="w-full lg:w-2/3">
                <RiskDistributionChart />
              </div>
              <div className="mt-6 w-full lg:mt-0 lg:w-1/3 lg:pl-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-3 h-4 w-4 rounded-full bg-green-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">Low Risk</div>
                      <div className="text-sm text-gray-500">
                        45% of students
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-4 w-4 rounded-full bg-yellow-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Medium Risk
                      </div>
                      <div className="text-sm text-gray-500">
                        35% of students
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-4 w-4 rounded-full bg-red-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">High Risk</div>
                      <div className="text-sm text-gray-500">
                        20% of students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RiskCard>

          {/* Stats Card */}
          <RiskCard title="Success Metrics">
            <StatsCard
              percentage={85}
              description="85% of students who followed recommendations improved by +1 grade"
            />
          </RiskCard>
          {/* Learning Styles Card */}
          <RiskCard
            title="Learning Styles Distribution"
            className="lg:col-span-3"
          >
            <LearningStylesChart />
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-blue-50 p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">65%</div>
                <div className="text-sm font-medium text-gray-900">Visual</div>
                <div className="text-xs text-gray-500">Learn by seeing</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 text-center">
                <div className="text-2xl font-bold text-purple-700">45%</div>
                <div className="text-sm font-medium text-gray-900">
                  Auditory
                </div>
                <div className="text-xs text-gray-500">Learn by hearing</div>
              </div>
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="text-2xl font-bold text-green-700">55%</div>
                <div className="text-sm font-medium text-gray-900">
                  Kinesthetic
                </div>
                <div className="text-xs text-gray-500">Learn by doing</div>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4 text-center">
                <div className="text-2xl font-bold text-yellow-700">40%</div>
                <div className="text-sm font-medium text-gray-900">
                  Reacting
                </div>
                <div className="text-xs text-gray-500">Learn by responding</div>
              </div>
            </div>
          </RiskCard>
        </div>
      </div>
    </div>
  );
}
