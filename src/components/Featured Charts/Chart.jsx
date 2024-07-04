import React from "react";

const Chart = ({ img, name, text }) => {
  return (
    <div className="flex flex-col  rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center">
      <div className={` overflow-hidden  rounded-md mb-2`}>
        <img src={img} alt={name} className="" />
      </div>
      <p className={`text-[15px] tracking-wide truncate mb-1`}>{name}</p>
      <div className="">
        <p className="text-white/65 tracking-wide text-[13px] line-clamp-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Chart;
