import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Form() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    matricule: "",
  });
  const [errors, setErrors] = useState({});

  const { authenticate, loading: loadingState } = useAuth();

  const navigate = useNavigate();

  const signupLabels = [
    {
      id: 1,
      name: "matricule",
      type: "text",
      placeholder: "e.g LMU24SWE286",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "e.g Tabe Clinton",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "e.g tabeclinton@gmail.com",
    },
  ];
  const loginLabels = [
    {
      id: 1,
      name: "matricule",
      type: "text",
      placeholder: "e.g LMU24SWE286",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "e.g tabeclinton@gmail.com",
    },
  ];

  function validate() {
    const newErrors = {};

    if (!formData.matricule.trim()) {
      newErrors.matricule = "Matricule is required";
    }

    if (isSignup && !formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);

    console.log(errors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields");
      return;
    }

    authenticate(formData, isSignup);
  }

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      matricule: "",
    });
    setErrors({});
  }, [isSignup]);

  console.log(formData);

  return (
    <>
      <div className="bg-primary flex w-full max-w-lg justify-around gap-2 rounded-t-2xl p-2 font-bold text-gray-900">
        <button
          type="button"
          className={`my-2 w-[50%] rounded-lg px-4 py-2 ${!isSignup ? "bg-accent/80 text-primary" : "bg-primary-dark"}`}
          onClick={() => {
            setIsSignup(false);
          }}
        >
          Login
        </button>
        <button
          type="button"
          className={`my-2 w-[50%] rounded-lg px-4 py-2 ${isSignup ? "bg-accent/80 text-primary" : "bg-primary-dark"}`}
          onClick={() => {
            setIsSignup(true);
          }}
        >
          Signup
        </button>
      </div>
      <form
        className="bg-primary flex w-full max-w-lg flex-col items-center gap-2 rounded-b-2xl p-6 shadow-lg"
        onSubmit={handleSubmit}
      >
        {isSignup &&
          signupLabels.map((label) => (
            <FormField
              label={capitalizeFirstLetter(label.name)}
              type={label.type}
              placeholder={label.placeholder}
              onChange={handleChange}
              key={label.id}
              name={label.name}
              value={formData[label.name]}
              error={errors[label.name]}
            />
          ))}
        {!isSignup &&
          loginLabels.map((label) => (
            <FormField
              label={capitalizeFirstLetter(label.name)}
              type={label.type}
              placeholder={label.placeholder}
              onChange={handleChange}
              key={label.id}
              name={label.name}
              value={formData[label.name]}
              error={errors[label.name]}
            />
          ))}
        <button
          type="submit"
          disabled={loadingState}
          className={`bg-accent text-primary mt-2 w-full rounded-md p-2 py-3 font-bold ${loadingState ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {loadingState ? "Please wait..." : isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
    </>
  );
}
