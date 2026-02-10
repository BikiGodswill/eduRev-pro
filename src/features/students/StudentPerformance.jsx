import React from "react";
import Title from "../../ui/Title";
import StudentPerfomanceChart from "../../ui/StudentPerfomanceChart";

const courses = [
  {
    name: "Machine Learning",
    attendance: 96,
    assignments: 95,
    participation: 88,
    score: 92,
  },
  {
    name: "Data Structures",
    attendance: 92,
    assignments: 90,
    participation: 85,
    score: 88,
  },
  {
    name: "Statistics",
    attendance: 88,
    assignments: 82,
    participation: 90,
    score: 85,
  },
  {
    name: "Linear Algebra",
    attendance: 94,
    assignments: 93,
    participation: 87,
    score: 91,
  },
];

export default function StudentPerformance() {
  return (
    <div>
      <Title />
      <div className="bg-primary-dark mx-auto space-y-3 rounded-xl p-4">
        <h2 className="mb-2 text-lg font-semibold text-stone-800">
          Course Performance
        </h2>
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-secondary/85 hover:bg-secondary/80 flex items-center justify-between rounded-lg p-4 transition"
          >
            <div>
              <h3 className="text-primary font-medium">{course.name}</h3>
              <p className="text-primary mt-1 text-sm">
                Attendance: {course.attendance}% &nbsp;|&nbsp; Assignments:{" "}
                {course.assignments}% &nbsp;|&nbsp; Participation:{" "}
                {course.participation}%
              </p>
            </div>
            <div
              className={`text-lg font-bold ${
                course.score >= 90 ? "text-accent" : "text-blue-400"
              }`}
            >
              {course.score}
            </div>
          </div>
        ))}
      </div>
      <StudentPerfomanceChart />
    </div>
  );
}
