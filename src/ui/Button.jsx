import React from "react";
import { FaPerson } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

export default function Button({ children, onClick }) {
  const button = "signup" || "";
  return (
    <div className="bg-primary my-2 flex w-full items-center justify-center hover:rounded-sm">
      {button === "signup" ? (
        <FaPerson />
      ) : button === "signin " ? (
        <HiArrowRight />
      ) : (
        ""
      )}
      <button onClick={onClick} className="p-2 text-sm font-semibold">
        {children}
      </button>
    </div>
  );
}
