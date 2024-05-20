import React from "react";

const SectionBtn = ({ title = "button", onClick = null }) => {
  return (
    <div className="w-full flex justify-center" style={{ marginTop: -150 }}>
      <button
        onClick={onClick ? onClick : null}
        // className="bg-green-600 text-white py-2 px-4 rounded-lg"
        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        style={{ backgroundColor: "green" }}
      >
        {title}
      </button>
    </div>
  );
};

export default SectionBtn;
