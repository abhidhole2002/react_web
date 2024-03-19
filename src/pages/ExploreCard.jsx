import React from "react";
import { GrRestaurant } from "react-icons/gr";
import img1 from "../../public/images/fullsize.jpg";

const ExploreCard = () => {
  return (
    <div className="rounded-md">
      <div className="w-80 shadow-2xl mx-auto mt-10 rounded-md">
        <div className="">
          <img src={img1} alt="" className="rounded-md" />
        </div>
        <div>
          <h1 className="mt-2 mb-2 text-lg font-semibold">demo</h1>
        </div>
        <div className="flex flex-row justify-evenly text-xs items-center">
          <h1 className="bg-blue-500 p-1 px-3 rounded-md">5.5 </h1>
          <h1 className="text-gray-300 text-xl   ">|</h1>
          <h1>Rating</h1>
          <h1 className="text-gray-300 text-xl   ">|</h1>
          <h1>form</h1>
          <h1 className="text-gray-300 text-xl   ">|</h1>
          <h1>restaurant</h1>
        </div>
        <div className="flex p-4 items-center mt-2-3">
          <div className="">
            <img src={img1} alt="" className="rounded-full h-14 w-44" />
          </div>
          <div>
            <p className=" text-justify ml-4 text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incid ut labore et dolore magna aliqua....
            </p>
          </div>
        </div>
        <hr className="mx-3" />
        <div className="flex justify-around text-xs items-center py-2 ">
          <h1 className="text-red-500">Close Now</h1>
          <div className="flex gap-4 text-gray-500">
            <GrRestaurant />
            <GrRestaurant />
            <GrRestaurant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
