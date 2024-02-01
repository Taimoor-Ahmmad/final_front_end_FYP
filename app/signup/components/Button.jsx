import React from "react";

const Button = ({ title }) => {
  return (
    <button>
      <div className="w-[350px] h-[55px] hover:text-blue-500 px-2.5 py-3.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-semibold font-['Noto Sans']">
          {title}
        </div>
      </div>
    </button>
  );
};

export default Button;
