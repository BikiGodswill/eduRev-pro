import React from "react";
import { BiBookOpen } from "react-icons/bi";

export default function Logo({ type = "white" }) {
  return (
    <div className="relative flex gap-2 before:absolute before:-bottom-6 before:-left-4 before:h-px before:w-[calc(100%+32px)] before:bg-stone-100/20 before:content-['']">
      <div className="bg-accent flex h-max w-max items-center justify-center rounded-lg p-2.5">
        <BiBookOpen className="text-primary text-2xl" />
      </div>
      <div>
        <h3
          className={`text-${type === "white" ? "primary" : "stone-800"} text-lg font-bold`}
        >
          EduRev
        </h3>
        <p
          className={`text-xs font-semibold text-${type === "white" ? "primary" : "stone-800"}`}
        >
          Insight Platform
        </p>
      </div>
    </div>
  );
}
