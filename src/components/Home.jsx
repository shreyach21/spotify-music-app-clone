import React from "react";
import { artits, assets } from "../assets/assets";
import Artist from "./Popular Artists/Artist";
import { Link } from "react-router-dom";
const Home = () => {
  const artistdata = artits.slice(0, 6);

  return (
    <div className="flex flex-col w-full pt-4 bg-gradient-to-b from-[#242424] to-[#121212] ">
      <div className="flex flex-col">
        <div className="flex justify-between mb-1 mt-20 items-center pl-5 pr-3">
          <h1 className="text-[22px] font-semibold text-white">
            Popular artists
          </h1>
          <p className="text-white/65 hover:underline cursor-pointer text-sm">
            <Link to="/popular-artists">Show all</Link>
          </p>
        </div>
        <div className="flex mx-2 items-center">
          {artistdata.map(({ img, name, id }) => (
            <div key={id} className="">
              <Artist
                img={img}
                name={name}
                className="w-[9.7rem] h-[9.7rem]"
                nameSize="text-[15px] leading-6 tracking-wide"
                textSize="text-[13px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
