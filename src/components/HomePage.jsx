import React from "react";
import fullimg from "../../public/images/screen.jpg";
import InputCom from "./InputCom";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import Card from "./Card";

const HomePage = () => {
  return (
    <>
      <div>
        <img src={fullimg} alt="" className=" h-screen object-cover w-full" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold">
        <div className="text-white font-semibold text-xl">
          <h1 className="text-4xl font-extrabold  w-5/6 mx-auto mb-8 leading-tight tracking-wide">
            BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED
          </h1>
          <h2 className="text-2xl font-semibold  w-5/6 mx-auto mb-8 leading-tight tracking-wide">
            Find Best Place, Restaurant, Hotel, Real State and many more think
            in just One click
          </h2>
        </div>

        <div className="flex flex-row  w-full items-center">
          <div className="">
            <div className="flex bg-white p-1 rounded-md">
              <InputCom
                lable="What"
                placeholder="Ex : Place , Resturent ,Food"
                icon={FaThList}
              />
              <InputCom
                lable="What"
                placeholder="Ex : Place , Resturent ,Food"
                icon={MdOutlineMyLocation}
              />
            </div>
          </div>
          <div className="">
            <button className="bg-red-400 w-52 ml-6 py-5 rounded-md">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-around  w-full hover:text-white">
          <Card icon={GrRestaurant} title="demo" count="100" />
          <Card icon={GrRestaurant} title="demo" count="100" />
          <Card icon={GrRestaurant} title="demo" count="100" />
          <Card icon={GrRestaurant} title="demo" count="100" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
