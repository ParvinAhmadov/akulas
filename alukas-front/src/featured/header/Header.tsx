"use client";
import AlukasSvg from "@/components/AlukasSvg";
import React, { useState } from "react";
import { GoChevronDown, GoSearch } from "react-icons/go";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const menuItems = [
    {
      name: "HOME",
      options: [
        "Home v1 - default",
        "Home v2 - classic",
        "Home v3 - Mega Shop",
        "Home v4 - Handmade",
        "Home v5 - Minimal",
        "Home v6 - Simple ",
        "Home v7 - Modern",
        "Home v8 - Collection",
        "Home v9 - LookBook",
        "Home v10 - Landing",
        "Home v11 - Instagram",
        "Home v12 - Fashion 1",
        "Home v13 - Fashion 2",
        "Home v14 - Fashion 3",
      ],
    },
    { name: "SHOP", options: ["Shop Option 1", "Shop Option 2"] },
    { name: "PRODUCT", options: ["Product Option 1", "Product Option 2"] },
    { name: "PAGES", options: ["Page Option 1", "Page Option 2"] },
    { name: "BLOGS", options: ["Blog Option 1", "Blog Option 2"] },
  ];

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <div className="bg-[#222222] text-[16px] p-2 text-[#FFFFFF] ">
        <div className="flex  items-center justify-between max-w-[1400px] w-full mx-auto flex-wrap ">
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <button className="flex items-center gap-1">
                English <GoChevronDown />
              </button>
            </div>
            <div>
              <button className="flex items-center gap-1">
                United States (USD $) <GoChevronDown />
              </button>
            </div>
            <div>
              <button>
                Summer Sale 15% off!{" "}
                <span className="underline">Shop Now!</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <a>Store Location</a>
            </div>
            <div>
              <a>Contact</a>
            </div>
            <div>
              <a>About</a>
            </div>
            <div>
              <a>Gift Cards</a>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="flex items-center justify-between max-w-[1400px] w-full mx-auto pt-[25px] pb-[25px] flex-wrap">
          <div className="flex w-[290px] justify-between gap-2 items-center border border-gray-300 px-2 py-3 flex-wrap">
            <input
              className="outline-none placeholder:text-gray-600"
              type="text"
              placeholder="Search Products"
            />
            <GoSearch className=" text-[23px] text-gray-500" />
          </div>
          <div className="mr-[14%]">
            <AlukasSvg />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative inline-block">
              <button
                className="relative"
                onMouseEnter={() =>
                  document
                    .getElementById("tooltip-bottom-user")
                    ?.classList.remove("opacity-0", "invisible")
                }
                onMouseLeave={() =>
                  document
                    .getElementById("tooltip-bottom-user")
                    ?.classList.add("opacity-0", "invisible")
                }
              >
                <CiUser className="text-[28px]" />
              </button>
              <div
                id="tooltip-bottom-user"
                role="tooltip"
                className="absolute top-full left-1/2 transform -translate-x-1/2  w-max px-2 py-1 text-sm font-medium text-white bg-black rounded shadow-sm opacity-0 invisible transition-all ease-in-out duration-300"
              >
                Log in
                <div className="tooltip-arrow absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-black"></div>
              </div>
            </div>
            <div className="relative inline-block">
              <button
                className="relative"
                onMouseEnter={() =>
                  document
                    .getElementById("tooltip-bottom-heart")
                    ?.classList.remove("opacity-0", "invisible")
                }
                onMouseLeave={() =>
                  document
                    .getElementById("tooltip-bottom-heart")
                    ?.classList.add("opacity-0", "invisible")
                }
              >
                <CiHeart className="text-[28px]" />
                <div className="absolute flex items-center text-[10px] top-[-1px] right-[-7px] justify-center p-2 bg-black text-white h-[5px] w-[5px] rounded-full">
                  0
                </div>
              </button>
              <div
                id="tooltip-bottom-heart"
                role="tooltip"
                className="absolute top-full left-1/2 transform -translate-x-1/2  w-max px-2 py-1 text-sm font-medium text-white bg-black rounded shadow-sm opacity-0 invisible transition-all ease-in-out duration-300"
              >
                Wishlist
                <div className="tooltip-arrow absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-black"></div>
              </div>
            </div>
            <div className="relative inline-block mr-4">
              <button
                className="relative"
                onMouseEnter={() =>
                  document
                    .getElementById("tooltip-bottom-cart")
                    ?.classList.remove("opacity-0", "invisible")
                }
                onMouseLeave={() =>
                  document
                    .getElementById("tooltip-bottom-cart")
                    ?.classList.add("opacity-0", "invisible")
                }
              >
                <PiShoppingCartLight className="text-[29px]" />
                <div className="absolute flex items-center text-[10px] top-[-1px] right-[-6px] justify-center p-2 bg-black text-white h-[5px] w-[5px] rounded-full">
                  0
                </div>
              </button>
              <div
                id="tooltip-bottom-cart"
                role="tooltip"
                className="absolute top-full left-1/2 transform -translate-x-1/2  w-max px-2 py-1 text-sm font-medium text-white bg-black rounded shadow-sm opacity-0 invisible transition-all ease-in-out duration-300"
              >
                Cart
                <div className="tooltip-arrow absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between max-w-[1400px] w-full mx-auto px-3 flex-wrap">
          <div className="relative mr-[-15%]">
            <div
              className={`w-[320px] flex justify-start h-[55px] px-[18px] py-[25px] cursor-pointer transition-all ease-in-out duration-400 ${
                isOpen ? "bg-[#222222] text-white" : "bg-white text-[#222222]"
              }`}
              onClick={toggleCategories}
            >
              <span className="flex items-center gap-1 font-semibold text-[16px]">
                BROWSE CATEGORIES
                <HiOutlineChevronDown
                  className={`transform transition-all  ease-in-out duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>

            <div
              className={`absolute top-full left-0 w-[320px] transition-all duration-500 ease-in-out overflow-hidden z-10 bg-white bo ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="w-full h-full">
                {[
                  "New Products",
                  "Top on Sale",
                  "Special Offer!",
                  "Necklaces",
                  "Rings",
                  "Bracelets",
                  "Earrings",
                  "Charm & Dangles",
                  "All Categories",
                ].map((item, index) => (
                  <li key={index}>
                    <div className="px-[10px] py-[15px] w-full flex text-[16px] justify-start transition-all ease-in-out duration-300 hover:bg-gray-100 cursor-pointer flex-wrap">
                      {item}
                    </div>
                    {index < 8 && <hr className="border-t border-gray-300" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <ul className="flex items-center gap-6 ">
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className="relative flex items-center gap-1 cursor-pointer group "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="relative flex items-center gap-1 text-[15px] border-b-2 border-transparent ">
                    {menu.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-black w-0 transition-all duration-300  ${
                        hoveredMenu === index ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </span>

                  <HiOutlineChevronDown
                    className={`transform transition-transform duration-300 `}
                  />

                  <div
                    className={`absolute left-0 top-10 w-[200px] bg-white transition-all duration-500 ease-in-out overflow-hidden z-10 ${
                      hoveredMenu === index ? "max-h-[700px]" : "max-h-0"
                    }`}
                  >
                    <ul className=" py-4 border ">
                      {menu.options.map((option, optIndex) => (
                        <li
                          key={optIndex}
                          className="px-4 py-2  relative group border-b-1 border-transparent"
                        >
                          {option}
                          <span className="absolute bottom-0  left-0 h-[2px] bg-gray-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <span className="relative flex items-center gap-1 text-[15px] border-b-2 border-transparent group cursor-pointer">
                <li>BUY ALUKAS!</li>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-black w-0 transition-all duration-300 group-hover:w-full`}
                ></span>
              </span>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[18px] cursor-pointer">
              <BsTelephone />
              <span>(+800) 1234 56</span>
            </div>
            <div className="flex items-center gap-1 text-[18px] cursor-pointer">
              <IoLocationOutline />
              <span>Our Stores</span>
            </div>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
};

export default Header;
