"use client";

import React, { useState } from "react";
import UserInput from "./UserInput";
import Button from "./Button";
import Links from "./Links";
import Link from "next/link";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-20 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <div className="flex justify-center space-x-3 font-sm">
            <h3 className="text-white">Don't Have an account?</h3>
            <Link href={"/signup"}>Sign up</Link>
          </div>
          <div className="space-x-4">
            <label
              className="block text-white text-2xl font-bold ml-3 mt-10"
              htmlFor="name"
            >
              Login
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            <UserInput content={"Username"} />
          </label>
        </div>
        <div className="mb-4">

          <UserInput content={"Password"} />
          <br />
          <div class="flex items-center">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox mt-5 ml-4 h-5 w-5 text-blue-600"
            />
            <label for="myCheckbox" class="ml-5 mt-5 text-white">
              Remember me
            </label>
          </div>
        </div>
        {/* <UserInput content={"Confirm Password"} /> */}
        <div className="flex items-center justify-between  mt-10"></div>
        <br />
        <div className="flex items-center justify-center text-white text-sm space-x-4 mt-4">
          <h1>Forgot Password?</h1>
          <button>
            <Link href={"/forgot"}>Click me</Link>
            
          </button>
        </div>
        <br />
        <div className="flex items-center justify-center text-sm space-x-4">
          <Links text={"Terms and Conditions"} />
          <Links text={"Support"} />
          <Links text={"Customer Care"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
