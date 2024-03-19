import React from "react";
import FooterBar from "./FooterBar";
const Contact = () => {
  return (
    <div className="bg-gray-200 p-24 mt-20">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-6">
          DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
        </h1>
        <h1 className="text-lg mb-6">
          Listrace offer you to list your business with us and we very much able
          to promote your Business.
        </h1>
      </div>
      <div className=" py-4 justify-center flex">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your name here"
            className="py-3 px-7 w-96"
          />
          <button className="bg-red-500 py-3 px-4 text-white font-semibold  ">
            Create Account
          </button>
        </div>
      </div>
      <div>
        <FooterBar />
      </div>
    </div>
  );
};

export default Contact;
