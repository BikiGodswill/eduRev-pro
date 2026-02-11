import React from "react";
import Logo from "./Logo";

export default function Heading() {
  return (
    <div className="my-2 flex w-full max-w-md flex-col items-center justify-center rounded-b-sm p-6">
      <Logo type="black" />
      <h1 className="mt-4 text-xl font-bold">Student Performance AI</h1>
      <p className="text-sm text-stone-600">
        Sign In and access your dashboard
      </p>
    </div>
  );
}
