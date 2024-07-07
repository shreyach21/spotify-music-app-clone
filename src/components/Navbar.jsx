import React from "react";
import { assets } from "../assets/assets";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    // <div className="flex justify-between items-center px-6 w-full h-[60px] mt-2 bg-[#0c0c0c] rounded z-50 overflow-x-scroll">
    <div className="flex justify-between items-center px-6 py-2 w-full h-full bg-gradient-to-b from-[#121212] to-[#111111] rounded  ">
      <div className="flex gap-4 ">
        <GoChevronLeft
          className="text-white/55 hover:text-white duration-300 bg-black rounded-full"
          size={26}
          onClick={() => navigate(-1)}
        />
        <GoChevronRight
          className="text-white/55 hover:text-white duration-300 rounded-full bg-black "
          size={27}
          onClick={() => navigate(1)}
        />
      </div>
      <div className="flex gap-x-8 items-center mr-2">
        <Link to="/signup" className="">
          <button className="text-white/65 hover:text-white hover:scale-105  text-md font-semibold min-w-[65px]">
            Sign up
          </button>
        </Link>
        <Link to="/signin" className="">
          <button className="text-[15px] bg-white hover:scale-105 hover:bg-white/95 py-3 rounded-full font-semibold min-w-[95px] lg:px-8 ">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
