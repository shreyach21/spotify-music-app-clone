import React, { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import "../playButton.css";
const Artist = ({ img, name, className, nameSize, textSize }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col gap-1 rounded hover:bg-[#202020] duration-300 cursor-pointer p-3 items-center relative h-full "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={` overflow-hidden rounded-full ${className} flex justify-center items-center`}
      >
        <img src={img} alt={name} className="shrink-0" />
      </div>

      <p className={`${nameSize} text-start w-full pt-0.5`}>{name}</p>
      <p
        className={`${textSize} text-white/65 tracking-wide text-start w-full`}
      >
        Artist
      </p>
      <div className={`play-button ${hover ? "visible" : "hidden"} `}>
        <IoIosPlay size={30} color="black" />
      </div>
    </div>
  );
};

export default Artist;
