import React from "react";
import { BiBell } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";

export default function ProfilePreview() {
  return (
    <div className="flex flex-row gap-2">
      <div className="hover:bg-primary-dark flex items-center justify-center rounded-sm border-stone-300 p-2 px-3">
        <BiBell className="text-stone-600" />
      </div>
      <div className="hover:bg-primary-dark w-34 cursor-pointer rounded-sm p-1 px-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-stone-500">
            <img />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold whitespace-nowrap">
              Royal Tk
            </h4>
            <p className="text-[.7rem]">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
