import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import "../playButton.css";
const Item = ({ img, name, text, className, nameSize, textSize }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col  rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center relative h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={` overflow-hidden  rounded-md mb-2`}>
        <img src={img} alt={name} className="" />
      </div>
      <p className={`text-[15px] tracking-wide truncate mb-1 text-start`}>
        {name}
      </p>
      <div className="">
        <p className="text-white/65 tracking-wide text-[13px] line-clamp-2 text-start">
          {text}
        </p>
      </div>
      <div className={`play-button ${hover ? "visible" : "hidden"} `}>
        <IoIosPlay size={30} color="black" />
      </div>
    </div>
  );
};

export default Item;
