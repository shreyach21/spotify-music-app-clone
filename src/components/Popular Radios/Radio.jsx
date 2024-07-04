import React from "react";

const Radio = ({ img, radioName, singers }) => {
  return (
    <div className="flex flex-col  rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center">
      <div className={` overflow-hidden  rounded-md mb-2`}>
        <img src={img} alt={radioName} className="" />
      </div>
      <p className={`text-[15px] tracking-wide truncate mb-1`}>{radioName}</p>
      <div className="">
        <p className="text-white/65 tracking-wide text-[13px] line-clamp-2">
          {singers}
        </p>
      </div>
    </div>
  );
};

export default Radio;
