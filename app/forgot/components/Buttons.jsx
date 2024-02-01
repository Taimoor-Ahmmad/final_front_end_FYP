import React from "react";

const Buttons = ({title}) => {
  return (
    <button>
      <div className="flex-col justify-center items-center gap-3 flex">
        <div className="w-[400px] px-2.5 py-3.5 bg-gradient-to-r from-pink-500 via-pink-600 to-rose-900 rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-medium font-['Noto Sans']">
            {title}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Buttons;
