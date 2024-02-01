"use client";
import React, { useState } from "react";
import Links from "./Links";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="form-box bg-opacity-20  text-white p-10 rounded-xl shadow-md w-90 h-96">
        <div className="header-text text-3xl font-semibold pb-6 text-center">
          Forgot Password
        </div>
        <div className="text-sm">Please enter your Email</div>
        <br />
        <input
          type="text"
          className="mb-4 border-none p-2 rounded-md w-full text-lg bg-white text-black placeholder-black"
          placeholder="example@email.com"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input type="checkbox" id="checkbox" className="hidden" />
        <button
          type="submit"
          className="bg-pink-500 text-white border-none rounded-md cursor-pointer w-full text-lg p-2 mt-4"
        >
          Submit
        </button>

        <div className="text-white text-sm flex items-center mt-20 pt-20">
          <h1 className="mr-2">Don't have an account?</h1>
          
          <Links content={"Sign Up"} />
        </div>
        <br/>
        <div className="mt-10rem">
        <Links content={"Terms & Conditions"}/> <Links content={" Support "}/>  <Links content={" Customer Care"}/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
