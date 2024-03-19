import React from "react";

const Card = ({ icon: Icon, title, count }) => {
  return (
    <div className="mt-60 hover:text-white">
      <div className=" bg-white flex flex-col items-center w-60 p-2  shadow-gray-900 rounded-sm shadow-md hover:bg-red-400  ">
        <div className=" text-black text-8xl mb-4">{Icon && <Icon />}</div>
        <div>
          <h1 className="text-xl text-black mb-1 ">{title}</h1>
          <h2 className="text-lg mb-1 text-gray-500 ">{count}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
