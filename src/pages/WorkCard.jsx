import React from "react";

const workCard = ({ icon: Icon, title, paragraph }) => {
  return (
    <>
      <div className="shadow-2xl rounded-md flex flex-col items-center w-80 p-4">
        <div className="bg-gray-300 text-5xl rounded-full p-4 text-gray-700">
          {Icon && <Icon />}
        </div>
        <h1 className="text-lg mt-7 mb-7">{title}</h1>
        <p className="mb-6 ">{paragraph}</p>
        <button className="bg-white px-3 py-1 mb-3 mt-3 border border-gray-600 rounded-sm">
          Read More
        </button>
      </div>
    </>
  );
};

export default workCard;
