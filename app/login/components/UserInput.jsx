"use client"
import React, { useState } from "react";

const UserInput = ({ content }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="w-[350px] h-[55px] px-3 py-5 rounded-xl  border-white justify-start items-center gap-2.5 inline-flex">
        <div className="text-2xl font-normal font-['Roboto']">
          <input
            id="name"
            type="text"
            placeholder={content}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent" // Added bg-transparent class
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
