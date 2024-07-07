import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";
import { PiToggleLeftFill } from "react-icons/pi";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Signin = () => {
  const handleLogin = () => {};
  const [isVisible, setIsVisible] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  useEffect(() => {
    setType(isVisible ? "text" : "password");
    console.log("Password type: ", type);
  }, [isVisible]);
  return (
    <div className="min-h-screen bg-black">
      <div className=" bg-gradient-to-b  from-[#292929] to-[rgba(0,0,0)] flex items-center flex-col">
        <div className="sm:w-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] to-[rgba(255,255,255,0.07)] md:w-[735px] max-sm:w-full  md:my-8 rounded-lg flex flex-col justify-center py-1 ">
          <div className="flex justify-center md:pt-7 md:pb-5 max-sm:pt-10 sm:pt-10 items-center">
            <FaSpotify
              color="white"
              className="md:text-[38px]
              sm:text-[26px]
              max-sm:text-[26px]"
            />
          </div>
          <h1 className="text-white text-[31px] text-center pb-7 font-bold">
            Log in to Spotify
          </h1>
          <div className="md:w-[44%] sm:w-[90%] max-sm:w-[88%] mx-auto space-y-[8px]">
            <button className="flex items-center text-md rounded-full border-[1.3px] border-white/45 hover:border-white px-[35px] py-[11px] w-full mx-auto">
              <FcGoogle size={23} />
              <span className="flex-grow text-center text-white/85 font-bold">
                Continue with Google
              </span>
            </button>
            <button className="flex items-center text-md rounded-full border-[1.3px] border-white/45 hover:border-white px-[35px] py-[11px] w-full mx-auto">
              <BiLogoFacebook
                size={23}
                className="bg-blue-600 rounded-full text-white"
              />
              <span className="flex-grow text-center text-white/85 font-bold">
                Continue with Facebook
              </span>
            </button>
            <button className="flex items-center text-md rounded-full border-[1.3px] border-white/45 hover:border-white px-[35px] py-[11px] w-full mx-auto">
              <FaApple size={23} color="white" />
              <span className="flex-grow text-center text-white/85 font-bold">
                Continue with Apple
              </span>
            </button>
            <button className="text-center rounded-full border-[1.3px] border-white/45 hover:border-white px-6 py-[11px] w-full mx-auto text-white font-semibold text-md ">
              Continue with phone number
            </button>
          </div>
          <div className="h-[1px] bg-white/10 md:w-[75%] sm:w-[90%] max-sm:w-[88%] mx-auto mb-8 mt-10"></div>
          <form
            onSubmit={handleLogin}
            className="sm:w-[90%] max-sm:w-[88%] md:w-[44%] mx-auto"
          >
            <div className="flex flex-col md:w-full mx-auto">
              <label
                htmlFor="email"
                className="pb-2 text-white font-bold text-sm"
              >
                Email or username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email or username"
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-3 rounded-md bg-black text-white focus:border-white border-[1.5px] hover:border-white border-white/55 w-full focus:outline-white text-md"
              />
            </div>
            <div className="flex flex-col mt-5 md:w-full">
              <label
                htmlFor="password"
                className="pb-2 font-bold text-white text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-6 py-3 rounded-md bg-black text-white focus:border-white border-[1.5px] hover:border-white border-white/55 w-full focus:outline-white text-md"
                />
                <span
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                  onClick={() => setIsVisible((prev) => !prev)}
                >
                  {isVisible ? (
                    <ImEye size={25} className="text-white/65" />
                  ) : (
                    <ImEyeBlocked size={25} className="text-white/65" />
                  )}
                </span>
              </div>
            </div>
            <div className="pt-4 text-xs text-white font-semibold flex items-center w-full">
              <span
                className="pr-4"
                onClick={() => setIsToggled((prev) => !prev)}
              >
                {isToggled ? (
                  <PiToggleLeftFill size={30} className="text-white/65" />
                ) : (
                  <IoToggleSharp size={30} color="#1ed760" />
                )}
              </span>
              Remember me
            </div>
            <button
              type="submit"
              className="px-6 py-3 my-8 duration-100 rounded-full bg-[#1ed760] text-black font-bold text-md w-full cursor-pointer hover:bg-[#21e967] hover:scale-105"
            >
              Log In
            </button>
          </form>
          <p className="text-white underline hover:text-[#1ed760] text-md text-center w-full mx-auto cursor-pointer">
            Forgot your password?
          </p>
          <div className="md:h-[1px] bg-white/10 md:w-[75%] mx-auto md:mt-10"></div>
          <div className="text-center text-[15px] mb-16 md:mt-20 sm:mt-10 max-sm:mt-10 leading-loose md:flex justify-center gap-x-2">
            <p className="text-white/65 sm:pb-2.5 max-sm:pb-2.5">
              Don't have an account?
            </p>
            <p className="underline text-white font-bold cursor-pointer hover:text-[#1ed760]">
              Sign up for Spotify
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 bg-[rgba(255,255,255,0.07)]">
        <p className="text-white/65 text-[11px] leading-4 text-center w-[90%] mx-auto">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <span className="underline cursor-pointer">Privacy Policy</span>
          &nbsp;and&nbsp;
          <span className="underline cursor-pointer">Terms of Service</span>
          &nbsp;apply.
        </p>
      </div>
    </div>
  );
};

export default Signin;
