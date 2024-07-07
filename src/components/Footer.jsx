import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#121212] pt-16 px-3 text-white flex flex-col ">
      <div className="flex justify-between flex-wrap gap-7 ">
        <div className="flex md:flex-grow justify-between ml-5 text-[14.5px] tracking-wide flex-wrap sm:gap-x-9  gap-y-7 max-sm:max-w-[200px] max-w-[720px]">
          <div className="flex flex-col gap-y-2">
            <p className="text-white font-semibold text-[15px]">Company</p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white ">
              About
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Jobs
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              For the Record
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-white font-semibold text-[15px]">Communities</p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              For Artists
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Developers
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Advertising
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Investors
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Vendors
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-white font-semibold text-[15px]">Useful links</p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Support
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Free Mobile App
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-white font-semibold text-[15px]">
              Spotify Plans
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Premium Individual
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Premium Duo
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Premium Family
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Premium Student
            </p>
            <p className="text-white/65 cursor-pointer hover:underline hover:text-white">
              Spotify Free
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 ml-4 mr-5">
          <div className="size-10 rounded-full bg-[#272727] hover:bg-[#696969] flex justify-center items-center">
            <FaInstagram size={18} />
          </div>
          <div className="size-10 rounded-full bg-[#272727] hover:bg-[#696969] flex justify-center items-center">
            <FaTwitter size={17} />
          </div>
          <div className="size-10 rounded-full bg-[#272727] hover:bg-[#696969] flex justify-center items-center">
            <FaFacebook size={18} />
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#272727] my-10 ml-4"></div>
      <div className="text-sm text-white/55 mb-8 ml-4">
        &copy; 2024 Spotify AB
      </div>
    </div>
  );
};

export default Footer;
