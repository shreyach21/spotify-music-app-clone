import React from "react";
import { artits, assets } from "../assets/assets";
import Artist from "./Popular Artists/Artist";
import { Link } from "react-router-dom";
const Home = () => {
  const artistdata = artits.slice(0, 6);

  return (
    <div className="flex flex-col w-full pt-7 ">
      <div className="flex flex-col">
        <div className="flex justify-between mb-3 mt-3 items-center pl-6 pr-3">
          <h1 className="text-[25px] font-medium text-white tracking-wide">
            Popular artists
          </h1>
          <p className="text-white/65 hover:underline cursor-pointer">
            <Link to="/popular-artists">Show all</Link>
          </p>
        </div>
        <div className="flex mx-2 items-center">
          {artistdata.map(({ img, name, id }) => (
            <div key={id} className="w-1/6">
              <Artist
                img={img}
                name={name}
                className="size-44"
                nameSize="text-md"
                textSize="text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
