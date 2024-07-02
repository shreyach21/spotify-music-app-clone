import React from "react";
import { assets } from "../assets/assets";
import { FaSpotify } from "react-icons/fa6";
import { GoPlus, GoHomeFill } from "react-icons/go";
import { FiSearch, FiGlobe } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-2  text-white gap-2.5 ">
      <div className="bg-[#121212] gap-7 h-[15%] rounded flex flex-col justify-around text-lg py-5">
        <div className="flex items-center cursor-pointer gap-0.5 pl-8">
          <FaSpotify color="white" size={27} />
          <p className="font-semibold ">Spotify</p>
        </div>
        <div className="flex items-center gap-7 cursor-pointer pl-8 text-white/65 hover:text-white duration-300 ">
          {/* <img src={assets.home_icon} className="w-6 " alt="home" /> */}
          <GoHomeFill size={30} />
          <p className="font-semibold ">Home</p>
        </div>
        <div className="flex items-center gap-7 cursor-pointer pl-8 text-white/65 hover:text-white duration-300">
          {/* <img src={assets.search_icon} className="w-6 " alt="search" /> */}
          <FiSearch size={28} />
          <p className="font-semibold ">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] rounded h-[85%] ">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={assets.stack_icon} className="w-8 " alt="library" />
            <span className="text-lg text-white/65 font-semibold hover:text-white duration-300 cursor-pointer">
              Your Library
            </span>
          </div>
          <GoPlus
            size={35}
            className="text-white/55 p-1 hover:text-white duration-300 cursor-pointer hover:bg-[#1a1a1a] rounded-full"
          />
        </div>
        <div className="">
          <div className="p-4 bg-[#242424] rounded flex flex-col font-semibold justify-start items-start pl-4 gap-2 m-2">
            <h1>Create your first playlist</h1>
            <p className="font-light">it's easy, we'll help you</p>
            <button className="px-4 py-1.5 bg-white text-black  rounded-full text-[15px] mt-4 hover:scale-105 hover:bg-gray-100">
              Create playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] rounded flex flex-col font-semibold justify-start items-start pl-4 gap-2 m-2 mt-6">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light">We'll keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-black rounded-full text-[15px] mt-4 hover:scale-105 hover:bg-gray-100">
              Browse podcasts
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white/65 text-xs capitalize pl-8 py-8 cursor-pointer leading-normal">
          <div className="flex gap-4 items-center ">
            <p>Legal</p>
            <p>safety & privacy center</p>
            <p>privacy policy</p>
          </div>
          <div className="flex gap-4 items-center">
            <p>cookies</p>
            <p>about ads</p>
            <p>accessibility</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="hover:underline">cookies</p>
          </div>
        </div>
        <div className="flex items-start pb-6">
          <div className="hover:scale-105">
            <button className="flex justify-center items-center gap-1 text-white font-semibold cursor-pointer px-3 py-1.5 border-[1.2px] border-white/55 hover:border-white duration-200 scale-105  ml-8 rounded-full text-sm ">
              <FiGlobe size={20} />
              <p>English</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
