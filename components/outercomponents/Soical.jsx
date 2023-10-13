import React from "react";
import { BsInfo } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Social = () => (
  <div className=" md:relative bg-gradient-to-r from-[#67499D] to-[#3B378D] flex flex-col justify-center items-center text-white space-y-4 py-8 md:flex-row md:space-y-20 lg:space-y-0 lg:gap-5">
    <div className="title text-center md:absolute lg:static md:inset-1 md:py-5">
      <p className=" text-sm">We’re Always</p>
      <p className=" text-lg font-bold"> Here To Help</p>
    </div>
    <div className="info flex justify-center">
      <div className="icon bg-white flex items-center rounded-full ml-2 py-2 px-2 lg:py-2 lg:px-2 cursor-pointer hover:bg-gray-300 h-full">
        <BsInfo
          style={{
            color: "#172B4D",
            fontSize: "1.5em",
          }}
        />
      </div>
      <div className=" px-6 pt-1">
        <p className=" text-sm text-[#DBAA3C] lg:text-xs">HELP CENTER</p>
        <p className=" text-xs">help@jurhy.com</p>
      </div>
    </div>

    <div className="email flex justify-center ">
      <div className="icon bg-white flex items-center rounded-full py-2 px-3 lg:py-3 lg:px-3 cursor-pointer hover:bg-gray-300">
        <MdEmail
          style={{
            color: "#172B4D",
            fontSize: "1em",
          }}
        />
      </div>
      <div className=" px-3 pt-1">
        <p className=" text-sm text-[#DBAA3C] lg:text-xs">EMAIL SUPPORT</p>
        <p className=" text-xs">info@jurhy.com</p>
      </div>
    </div>
    <div className="phone flex justify-center ">
      <div className="icon bg-white flex items-center rounded-full py-3 px-3 lg:px-3 lg:py-3 cursor-pointer hover:bg-gray-300">
        <FaPhone
          style={{
            color: "#172B4D",
            fontSize: "1em",
          }}
        />
      </div>
      <div className=" px-3 pt-1">
        <p className=" text-sm text-[#DBAA3C] lg:text-xs">EMAIL SUPPORT</p>
        <p className=" text-xs">info@jurhy.com</p>
      </div>
    </div>
  </div>
);

export default Social;
