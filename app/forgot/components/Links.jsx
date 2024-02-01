import React from "react";

const Links = ({ content }) => {
  return (
    <button>
      <div className="text-white text-sm font-normal font-['Noto Sans']">
        {content}
      </div>
    </button>
  );
};

export default Links;
