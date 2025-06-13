import React from "react";
import { PillProps } from "@/interfaces";
import { icons } from "@/constants";
import Image from "next/image";

const Pills = ({ pillText, style }: PillProps) => {
  return (
    <div className="flex align-baseline items-center ">
      <span className=" whitespace-nowrap bg-white mb-2 pill_style text-black px-8 py-2 rounded-full font-semibold mr-2 cursor-pointer w-full hover:bg-gray-200">
        <Image src={icons.filter} alt="filter" height={16} width={16}  />
      </span>
      {pillText.map((text, index) => (
        <span
          key={index}
          className={` ${style} whitespace-nowrap bg-white text-black font-semibold font-Quicksand cursor-pointer hover:bg-gray-200`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default Pills;
