import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="bg-primary-dark/50 max-h-120 w-full overflow-auto">
      <div className="p-4">{children}</div>
    </div>
  );
}
