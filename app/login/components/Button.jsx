import React from "react";

const Button = ({ title }) => {
  return (
    <button>
      <div class="w-[340px] h-[55px] px-2.5 py-3.5 bg-gradient-to-r from-blue-400 via-purple-700 to-purple-900 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div class="text-white text-xl font-semibold font-['Noto Sans']">
          {title}
        </div>
      </div>
    </button>
  );
};

export default Button;
