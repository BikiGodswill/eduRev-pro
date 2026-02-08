import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormField from "./FormField";
import { HiArrowRight, HiLogin } from "react-icons/hi";
import { FaPerson } from "react-icons/fa6";
import Button from "./Button";

export default function Form() {
  const signupLabels = [
    {
      id: 1,
      name: "Matricule",
      type: "text",
      placeholder: "e.g LMU24SWE286",
    },
    {
      id: 2,
      name: "FullName",
      type: "text",
      placeholder: "e.g Royal Damilola Biki",
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "e.g dami@gmail.com",
    },
  ];
  return (
    <form className="bg-primary flex w-full max-w-lg flex-col items-center gap-4 rounded-xl p-6 shadow-lg">
      <div className="bg-primary-dark flex w-110 justify-around gap-2 rounded-sm px-4">
        <Button>signup</Button>
        <Button>signin</Button>
      </div>
      {signupLabels.map((label) => (
        <FormField
          label={label.name}
          type={label.type}
          key={label.id}
          placeholder={label.placeholder}
        />
      ))}
    </form>
  );
}
