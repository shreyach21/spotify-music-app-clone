import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const Signup = () => {
  const handleSubmit = () => {};
  return (
    <div className="text-white h-screen w-full  bg-black">
      <div className="w-[448px]  mx-auto pb-2 flex flex-col justify-center">
        <div className="flex justify-center sm:pt-6 sm:pb-4  max-sm:pt-6 max-sm:pb-4 md:pb-5 md:pt-8 items-center">
          <FaSpotify
            color="white"
            className="max-sm:w-[25px] max-sm:h-[25px] sm:w-[25px] sm:h-[25px] md:size-10"
          />
        </div>
        <h1 className="text-white md:text-[44px] sm:text-[30px] max-sm:text-[30px] text-center font-bold pb-10 leading-tight">
          Sign up to start
          <br /> listening
        </h1>
        <div className="w-[75%] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mx-auto w-full">
              <label
                htmlFor="email"
                className="text-white text-sm pb-2 pt-1 font-semibold"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="name@domain.com"
                className="outline-none text-md font-semibold  w-full py-3 pl-4 text-white rounded bg-black border border-white/55 hover:border-white focus:border-2 focus:border-white"
              />
            </div>
            <p className="text-[#1ed760] text-sm underline pt-3 pb-6 leading-normal cursor-pointer">
              use phone number instead
            </p>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#1cce5a] hover:bg-[#1ed760] text-black font-bold text-md w-full cursor-pointer duration-200"
            >
              Next
            </button>
          </form>
          <div className="flex gap-2 py-9 items-center">
            <div className="h-[1px] flex-grow bg-white/55"></div>
            <p className="text-white">or</p>
            <div className="h-[1px] flex-grow bg-white/55"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="flex items-center w-full rounded-full border-[1.3px]  border-white/40 hover:border-white py-3 text-md px-6">
              <FcGoogle size={23} />
              <span className="text-white font-bold leading-normal flex-grow text-center">
                Sign up with Google
              </span>
            </button>
            <button className="flex items-center w-full rounded-full border-[1.3px]  border-white/40 hover:border-white py-3 text-md px-6">
              <BiLogoFacebook
                size={23}
                className="bg-blue-600 rounded-full text-white"
              />
              <span className="text-white font-bold leading-normal flex-grow text-center">
                Sign up with Facebook
              </span>
            </button>
            <button className="flex items-center px-6 w-full rounded-full border-[1.3px]  border-white/40 hover:border-white py-3 text-md">
              <FaApple size={23} color="white" />
              <span className="text-white font-bold leading-normal flex-grow text-center">
                Sign up with Apple
              </span>
            </button>
          </div>
          <div className="h-[1px] bg-white/20 w-full my-9"></div>
          <div className="text-center text-[16px] mb-6 leading-relaxed">
            <span className="text-white/65 pr-2">Already have an account?</span>
            <span className="underline text-white font-bold cursor-pointer">
              Log in here
            </span>
          </div>
          <div className="text-xs text-white/65 leading-relaxed text-center pb-4">
            <p>This site is protected by reCAPCHA and the Google</p>
            <span className="underline cursor-pointer">Privacy Policy</span>
            &nbsp;and&nbsp;
            <span className="underline cursor-pointer">Terms of Service</span>
            &nbsp;apply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
