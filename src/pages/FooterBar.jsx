import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";

const FooterBar = () => {
  return (
    <div className="w-full bg-gray-100 flex justify-around py-4 items-center">
      <div>
        <h2 className="">&copy;Copyright </h2>
      </div>
      <div className="flex gap-7 items-center ">
        <h1 className="flex gap-1 items-center">
          <FaMobileRetro className=" text-xl" /> 1234567890
        </h1>
        <FaFacebook className=" text-xl" />
        <AiFillTwitterCircle className=" text-xl" />
        <FaGooglePlusG className=" text-xl" />
        <FaLinkedin className=" text-xl hover:text-blue-500 hover:scale-150" />
      </div>
    </div>
  );
};

export default FooterBar;
