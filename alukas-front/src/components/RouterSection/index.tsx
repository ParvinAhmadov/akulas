import Link from "next/link";
import React from "react";
import { LuChevronRight } from "react-icons/lu";

const RouterSection = () => {
  return (
    <div>
      <div className="w-full pt-[50px] pb-[50px]  flex justify-center items-center flex-col ">
        <div>
          <h1 className="text-[45px]">News</h1>
        </div>
        <nav>
          <ol className="flex items-center gap-1 justify-center">
            <li className="text-[17px] text-[#757575]">
              <Link href="/">Home</Link>
            </li>
            <span className="text-[15px] text-[#757575]">
              <LuChevronRight />
            </span>
            <li className="text-[17px]">
              <Link href="">News</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default RouterSection;
