import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-around items-center w-full py-5 fixed">
        <div className="font-sans cursor-pointer">
          <h1>
            <span className="text-black font-extrabold text-2xl">List</span>{" "}
            <span className="text-orange-500 font-extrabold text-2xl">
              Race
            </span>
          </h1>
        </div>
        <div>
          <nav className="list-none uppercase text-gray-600 font-semibold text-sm flex gap-7 cursor-pointer ">
            <li>Home</li>
            <li>How it works</li>
            <li>Explore</li>
            <li>Review</li>
            <li>Blog</li>
            <li>Contact</li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
