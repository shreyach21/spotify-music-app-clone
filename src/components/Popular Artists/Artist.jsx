import React from "react";

const Artist = ({ img, name, className, nameSize, textSize }) => {
  return (
    <div className="flex flex-col gap-1 rounded hover:bg-[#1b1b1b] duration-300 cursor-pointer p-3 justify-center">
      <div className={` overflow-hidden  rounded-full ${className} }`}>
        <img src={img} alt={name} />
      </div>
      <p className={`${nameSize} `}>{name}</p>
      <p className={`${textSize} text-white/65 tracking-wide`}>Artist</p>
    </div>
  );
};

export default Artist;
