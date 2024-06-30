import React from "react";
import { assets } from "../../assets/assets";
const PopularArtists = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between ">
        <h1 className="text-3xl">Popular Artists</h1>
        <p className="text-white/65">Show all</p>
      </div>
      <div className="flex gap-3"></div>
    </div>
  );
};

export default PopularArtists;
