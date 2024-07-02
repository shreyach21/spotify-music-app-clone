import React from "react";

const Lowbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-6 bg-gradient-to-r from-[#ae1a61] via-[#8B78E6]  to-[#3498DB]  cursor-pointer fixed bottom-0 right-0 left-0  ">
      {/* <div className="flex justify-between items-center py-3 px-6 bg-gradient-to-r from-[#ae1a61] via-[#8B78E6]  to-[#3498DB]  cursor-pointer "> */}
      <div className="text-white ">
        <p className="cursor-pointer">Preview of Spotify</p>
        <p className="cursor-pointer text-lg">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div className="mr-2.5">
        <button className="px-9 py-3 bg-white text-black text-lg font-semibold rounded-full hover:scale-105 hover:bg-white/90 duration-100 ">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Lowbar;
