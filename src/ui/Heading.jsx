import React from "react";
import Logo from "./Logo";

export default function Heading() {
  return (
    <div className="my-2 flex w-full max-w-md flex-col items-center justify-center rounded-b-sm p-6">
      <Logo />
      <h1 className="text-xl font-bold">Student Performance AI</h1>
      <p className="text-sm text-gray-400">sign in and access your dashboard</p>
    </div>
  );
}
