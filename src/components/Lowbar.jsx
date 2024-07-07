import React from "react";

const Lowbar = () => {
  return (
    <div className="flex justify-between items-center py-2.5 px-4 bg-gradient-to-r from-[#ae1a61] via-[#8B78E6]  to-[#3498DB]  cursor-pointer leading-tight overflow-x-scroll ">
      {/* <div className="flex justify-between items-center py-3 px-6 bg-gradient-to-r from-[#ae1a61] via-[#8B78E6]  to-[#3498DB]  cursor-pointer "> */}
      <div className="text-white min-w-[600px]">
        <p className="cursor-pointer text-sm ">Preview of Spotify</p>
        <p className="cursor-pointer text-[15.5px]">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div className="mr-1 min-w-[180px]">
        <button className="max-lg:px-9 lg:px-10 md:px-7 max-md:px-6 sm:px-5 max-sm:px-4 py-3.5 bg-white text-black text-md font-semibold rounded-full hover:scale-105 hover:bg-white/90 duration-100 ">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Lowbar;
