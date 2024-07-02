import React from "react";
import { assets } from "../assets/assets";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 w-full h-[60px] my-2 bg-[#0f0f0f] rounded ">
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
      <div className="flex gap-5 items-center">
        <Link to="/signup">
          <button className="text-white/65 hover:text-white hover:scale-105 duration-300 text-lg font-semibold">
            Sign up
          </button>
        </Link>
        <Link to="/signin">
          <button className="text-lg bg-white hover:scale-105 hover:bg-white/95 px-8 py-3 rounded-full font-semibold">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
