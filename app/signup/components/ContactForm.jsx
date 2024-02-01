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
          <label
            className="block text-white text-2xl font-bold ml-20 mb-2 pl-20"
            htmlFor="name"
          >
            Sign Up
          </label>
          <h3 className="text-white ml-3">Just some details to get you in</h3>
          {/**/}
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
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            <UserInput content={"Email"} />
          </label>

          <UserInput content={"Password"} />
        </div>
        <UserInput content={"Confirm Password"} />
        <div className="flex items-center text-2xl justify-between  mt-5">
          <Button title={"Sign Up"} />
        </div>
        <br />
        <div className="flex items-center justify-center text-sm mt-4">
          <h1 className="text-white mr-2">Already Registered?</h1>
          <Link href={"/login"}>
            <Links className="text-white" text={"Sign In"} />
          </Link>
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
