import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Outer_Container max-w-[4000px] mx-auto bg-white flex flex-col justify-center items-center">
      <div className="Inner_Container text-center flex items-center flex-col md:flex-row md:gap-x-20 lg:flex-row lg:space-x-96 lg:gap-10">
        <div className="Title_Container p-4 text-center space-y-3">
          <p className="text-xs font-bold text-gray-500">GET OUR APP</p>
          <div className=" flex space-x-2">
            <img className=" cursor-pointer" src="./app-store.png" alt="" />
            <img className=" cursor-pointer" src="./play-store.png" alt="" />
          </div>
        </div>
        <div className="Icons_Container flex pb-8 md:pb-0 lg:pb-0 flex-col space-y-3 ">
          <div>
            <p className="text-xs font-bold text-gray-500">CONNECT WITH US</p>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="icon bg-[#FEDA4F] flex items-center rounded-full py-2 px-2 cursor-pointer hover:bg-yellow-500">
              <FaFacebookF
                style={{
                  color: "#172B4D",
                  fontSize: "1em",
                }}
              />
            </div>
            <div className="icon bg-[#FEDA4F] flex items-center rounded-full py-2 px-2 cursor-pointer hover:bg-yellow-500">
              <FaTwitter
                style={{
                  color: "#172B4D",
                  fontSize: "1em",
                }}
              />
            </div>
            <div className="icon bg-[#FEDA4F] flex items-center rounded-full py-2 px-2 cursor-pointer hover:bg-yellow-500">
              <FaInstagram
                style={{
                  color: "#172B4D",
                  fontSize: "1em",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_Large_Screen hidden lg:inline lg:-order-1 ">
        <ul className="flex  text-gray-500 lg:text-sm lg:py-6 lg:text-black lg:space-x-5">
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">CAREERS</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a className="" href="">
              CORPORATE SITE
            </a>
          </li>

          <li>
            <a className="" href="">
              RETURN AND REFUND POLICY
            </a>
          </li>
          <li>
            <a className="" href="">
              SHIPPING POLICY
            </a>
          </li>
          <li>
            <a className="" href="">
              PRIVACY POLICY
            </a>
          </li>
        </ul>
        <hr className=" border-solid border-gray-200 w-full " />
      </div>
      <div className=" md:flex w-full">
        <div className="Footer_Small_Screen bg-[#F7F7FA] w-full text-center lg:hidden ">
          <ul className="flex flex-row justify-center space-x-5 py-2 text-xs text-gray-500">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a className="" href="">
                Terms Of Use
              </a>
            </li>
            <li>
              <a className="" href="">
                Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="Copy_Right bg-[#F7F7FA] w-full ">
          <div className=" lg:flex lg:flex-row mx-11 lg:justify-evenly lg:gap-96">
            <p className=" text-xs text-center text-gray-400 py-2">
              Copyright &copy; 2023 Jurhy, All right reserved{" "}
            </p>
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:flex-row lg:space-x-3">
              <img className=" w-4 h-3" src="./visa1.png" alt="" />
              <img className="w-4 h-2" src="./visa2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
