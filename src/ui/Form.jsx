import React, { useState } from "react";
import FormField from "./FormField";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Form() {
  //   const URLsignup = curl --location 'localhost:3000/api/v1/users/signup' \
  // --data-raw '{
  //     "name":"Marinus",
  //     "email":"user2@gmail.com",
  //     "matricule":"LMUI2023ENG12"
  // }'

  // const URLlogin  curl --location 'localhost:3000/api/v1/users/login' \
  // --data-raw '{
  //     "email":"user@gmail.com",
  //     "matricule":"LMUI-24SWE285"
  // }'
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    matricule: "",
  });
  const navigate = useNavigate();
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
  const loginLabels = [
    {
      id: 1,
      name: "Matricule",
      type: "text",
      placeholder: "e.g LMU24SWE286",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "e.g dami@gmail.com",
    },
  ];
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const BASE_URL = "https://edurev-pro.onrender.com/api/v1/users";
  async function handleSubmit(formData, e) {
    e.preventDefault();
    try {
      const url = isSignup ? `${BASE_URL}/signup` : `${BASE_URL}/login`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      toast.success(isSignup ? "Signup successful " : "Login successful ");
      navigate("/student");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  }
  return (
    <>
      <div className="bg-primary flex w-full max-w-lg justify-around gap-2 rounded-t-2xl p-2 font-bold text-gray-900">
        <button
          className={`my-2 w-[50%] rounded-lg px-4 py-2 ${!isSignup ? "bg-accent/80 text-primary" : "bg-primary-dark"}`}
          onClick={() => {
            setIsSignup(false);
          }}
        >
          Login
        </button>
        <button
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
              label={label.name}
              type={label.type}
              placeholder={label.placeholder}
              onChange={handleChange}
              key={label.id}
              name={label.name}
            />
          ))}
        {!isSignup &&
          loginLabels.map((label) => (
            <FormField
              label={label.name}
              type={label.type}
              placeholder={label.placeholder}
              key={label.id}
              onChange={handleChange}
              name={label.name}
            />
          ))}
        <button
          type="submit"
          className="bg-accent mt-2 w-full rounded-md p-2 font-bold text-gray-900"
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
    </>
  );
}
