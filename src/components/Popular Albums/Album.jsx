import React from "react";

const Album = ({ img, movie, singerList = [] }) => {
  return (
    <div className="flex flex-col  rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center">
      <div className={` overflow-hidden  rounded-md mb-2`}>
        <img src={img} alt={movie} className="" />
      </div>
      <p className={`text-[15px] tracking-wide truncate mb-0.5`}>{movie}</p>
      <div className="leading-tight">
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
    </div>
  );
};

export default Album;
