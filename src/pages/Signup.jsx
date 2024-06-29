import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const Signup = () => {
  const handleSubmit = () => {};
  return (
    // <div className=" max-h-screen h-screen w-full  flex justify-center items-center">
    <div className="w-[500px]  mx-auto pb-2 flex flex-col justify-center">
      <div className="flex justify-center py-6 items-center">
        <FaSpotify size={46} color="white" />
      </div>
      <h1 className="text-white text-5xl text-center font-bold pb-10">
        Sign up to start
        <br /> listening
      </h1>
      <div className="w-[75%] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mx-auto w-full">
            <label
              htmlFor="email"
              className="text-white text-md pb-2 pt-4 font-semibold"
            >
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="name@domain.com"
              className="outline-none  w-full py-3.5 pl-4 text-gray-900 rounded-sm bg-black border border-white/55 hover:border-white focus:border-2 focus:border-white"
            />
          </div>
          <p className="text-[#1ed760] text-md underline pt-3 pb-6 leading-normal cursor-pointer">
            use phone number instead
          </p>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#1ed760] text-black font-bold text-lg w-full cursor-pointer"
          >
            Next
          </button>
        </form>
        <div className="flex gap-2 py-10 items-center">
          <div className="h-[1px] flex-grow bg-white/55"></div>
          <p className="text-white">or</p>
          <div className="h-[1px] flex-grow bg-white/55"></div>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="flex items-center w-full rounded-full border-[1.5px]  border-white/55 hover:border-white py-3 text-lg px-6">
            <FcGoogle size={25} />
            <span className="text-white font-bold leading-normal flex-grow text-center">
              Sign up with Google
            </span>
          </button>
          <button className="flex items-center w-full rounded-full border-[1.5px] border-white/55 hover:border-white py-3 text-lg px-6">
            <BiLogoFacebook
              size={25}
              className="bg-blue-600 rounded-full text-white"
            />
            <span className="text-white font-bold leading-normal flex-grow text-center">
              Sign up with Facebook
            </span>
          </button>
          <button className="flex items-center px-6 w-full rounded-full border-[1.5px]  border-white/55 hover:border-white py-3 text-lg">
            <FaApple size={25} color="white" />
            <span className="text-white font-bold leading-normal flex-grow text-center">
              Sign up with Apple
            </span>
          </button>
        </div>
        <div className="h-[1px] bg-white/20 w-full my-9"></div>
        <div className="text-center text-lg mb-6">
          <span className="text-white/65 pr-2">Already have an account?</span>
          <span className="underline text-white font-bold cursor-pointer">
            Log in here
          </span>
        </div>
        <div className="text-sm text-white/65 leading-normal text-center">
          <p>This site is protected by reCAPCHA and the Google</p>
          <span className="underline cursor-pointer">Privacy Policy</span>
          &nbsp;and&nbsp;
          <span className="underline cursor-pointer">Terms of Service</span>
          &nbsp;apply.
        </div>
      </div>
    </div>
    /* </div> */
  );
};

export default Signup;
