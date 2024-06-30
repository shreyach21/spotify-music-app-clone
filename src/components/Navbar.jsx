import React from "react";
import { assets } from "../assets/assets";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 w-full h-[8%] my-2 bg-[#121212] rounded ">
      <div className="flex gap-5">
        <GoChevronLeft
          className="text-white/55 hover:text-white duration-300 bg-black rounded-full"
          size={30}
        />
        <GoChevronRight
          className="text-white/55 hover:text-white duration-300 rounded-full bg-black "
          size={30}
        />
      </div>
      <div className="flex gap-5 ">
        <button className="text-white/65 hover:text-white hover:scale-105 duration-300 text-lg font-semibold">
          Sign up
        </button>
        <button className="text-lg bg-white hover:scale-105 hover:bg-white/90 px-8 py-2 rounded-full font-semibold">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
