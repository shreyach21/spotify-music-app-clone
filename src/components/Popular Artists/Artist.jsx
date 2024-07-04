import React, { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import "../playButton.css";
const Artist = ({ img, name, className, nameSize, textSize }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col gap-1 rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center relative "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={` overflow-hidden  rounded-full ${className} } `}>
        <img src={img} alt={name} className="shrink-0 " />
      </div>
      <p className={`${nameSize} `}>{name}</p>
      <p className={`${textSize} text-white/65 tracking-wide`}>Artist</p>
      <div className={`play-button ${hover ? "visible" : "hidden"} `}>
        <IoIosPlay size={30} color="black" />
      </div>
    </div>
  );
};

export default Artist;
