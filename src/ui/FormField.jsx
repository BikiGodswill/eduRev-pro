import React from "react";

export default function FormField({ label, type, placeholder }) {
  return (
    <div className="flex w-110 flex-col">
      <label htmlFor="name" className="font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-primary-dark my-4 rounded-md px-2 py-2 outline-0"
      />
    </div>
  );
}
