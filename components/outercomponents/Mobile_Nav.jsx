"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaTags, FaBolt, FaSignInAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsMagic } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLink = [
    { name: "MEDICAL EQUIPMENTS", link: "#/" },
    { name: "DENTAL", link: "#/" },
    { name: "HYGIENE AND DISINFECTIONS", link: "#/" },
    { name: "NURSING MATERIAL", link: "#/" },
    { name: "EMMERGENCY AND FIRST AID", link: "#/" },
    { name: "REHABILITATION AID", link: "#/" },
  ];

  return (
    // mobile Navbar Container
    <nav className={` xl:hidden top-0 left-0 w-full `}>
      {/* Background Container */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#67499D] to-[#3B378D]">
        {/* Grid Controling Container */}
        <div className="grid grid-cols-8 w-full">
          <div onClick={() => setOpen(!open)} className={` lg:hidden m-5 `}>
            <GiHamburgerMenu
              className={`cursor-pointer text-[28px] text-white `}
            />
          </div>
          <div className=" flex justify-between col-span-7 lg:col-span-8 items-center mx-4">
            <img src="./log.png" className="w-[100px] h-[30px] " />

            <img src="cart.png" className="w-[40px] h-[40px] cursor-pointer" />
          </div>
          <div
            className={`z-[999] text-gray-900 absolute w-[70%] h-screen font-medium bg-white top-0 duration-300 ${
              open ? " left-0" : " left-[-100%]"
            }`}
          >
            <div
              onClick={() => setOpen(!open)}
              className=" bg-[#67499D] py-6 px-3 flex justify-between"
            >
              <div className="flex gap-2 text-white">
                <FaUserCircle
                  className={`cursor-pointer text-[28px] text-white`}
                />
                <Link href="/login">
                  <p className=" cursor-pointer">Sign Up</p>
                </Link>
              </div>
              <div className="">
                <AiOutlineClose
                  className={`cursor-pointer text-[28px] text-white`}
                />
              </div>
            </div>
            {/* Unordered list 1 */}
            <ul className=" flex flex-col mt-2 px-3 text-sm gap-2">
              <div className="flex gap-2 font-semibold text-gray-600">
                <FaTags
                  className={`cursor-pointer text-[14px] text-gray-400 mt-1`}
                />
                <p className="hover:text-[#67499D] cursor-pointer">
                  Top Categories
                </p>
              </div>
              <div className=" mx-6 space-y-1">
                {menuLink?.map((menu, i) => (
                  <li
                    onClick={() => setOpen(false)}
                    key={i}
                    className=" text-gray-400 text-xs hover:text-[#67499D] leading-5"
                  >
                    <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))}
              </div>
            </ul>
            {/* Unordered list 2 */}
            <ul className=" flex flex-col mt-2 px-3 text-sm gap-2 py-2">
              <div className="flex gap-2 font-semibold text-gray-600">
                <BsMagic
                  className={`cursor-pointer text-[14px] text-gray-400 mt-1`}
                />
                <p className="hover:text-[#67499D] cursor-pointer">
                  Featured Brands
                </p>
              </div>
            </ul>
            {/* Unordered list 3 */}
            <ul className=" flex flex-col px-3 text-sm gap-2 border-t py-2">
              <div className="flex gap-2 font-semibold text-gray-600">
                <FaBolt
                  className={`cursor-pointer text-[14px] text-gray-400 mt-1`}
                />
                <p className="hover:text-[#67499D] cursor-pointer">
                  New Releases
                </p>
              </div>
            </ul>
            {/* Unordered list 4 */}
            <ul className=" flex flex-col px-3 text-sm border-t py-2">
              <div className="flex gap-2 font-semibold text-gray-600">
                <FaSignInAlt
                  className={`cursor-pointer text-[14px] text-gray-400 mt-1`}
                />
                <Link href="/login">
                  <p className="hover:text-[#67499D] cursor-pointer">
                    Sign in/Sign up
                  </p>
                </Link>
              </div>
            </ul>
          </div>
          {/* Search */}
          <div className=" pb-[16px] px-4 col-span-8">
            <div className=" flex items-center bg-white  rounded-md">
              <input
                placeholder="Search"
                type="text"
                className="w-full rounded-md outline-none py-[6px]"
              />

              <FiSearch className="text-xl mr-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
