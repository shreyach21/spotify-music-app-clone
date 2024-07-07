import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import "../playButton.css";
const Album = ({
  img,
  movie,
  singerList = [],
  className,
  nameSize,
  textSize,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col gap-x-1 rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3  items-center relative h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={` overflow-hidden  rounded-md mb-2  flex justify-center items-center`}
      >
        <img src={img} alt={movie} className="" />
      </div>
      <p
        className={`text-[15px] tracking-wide truncate mb-0.5 ${nameSize} text-start w-full`}
      >
        {movie}
      </p>
      <div
        className={`leading-tight ${textSize} line-clamp-2 text-start w-full`}
      >
        {singerList
          .filter((singer) => singer !== singerList[singerList.length - 1])
          .map((item) => {
            return (
              <span className="">
                <span className="text-white/65 tracking-wide text-[13px] hover:underline">
                  {item}
                </span>
                <span className="hover:no-underline text-white/65 text-[13px]">
                  ,&nbsp;
                </span>
              </span>
            );
          })}
        <span className="text-white/65 tracking-wide text-[13px] hover:underline">
          {singerList[singerList.length - 1]}
        </span>
      </div>
      <div className={`play-button ${hover ? "visible" : "hidden"} `}>
        <IoIosPlay size={30} color="black" />
      </div>
    </div>
  );
};

export default Album;
