import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const InputCom = ({ lable, icon: Icon, placeholder }) => {
  return (
    <div>
      <div className="bg-white flex items-center px-4 py-2 w-96">
        <label htmlFor="" className="px-3 text-black text-lg ">
          {lable}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="border border-none py-2 w-80"
        />
        <div className="px-2 text-black text-2xl">{Icon && <Icon />}</div>
      </div>
    </div>
  );
};

export default InputCom;
