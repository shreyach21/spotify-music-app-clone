import React from "react";
import { popularAlbums } from "../../assets/assets";
import Album from "./Album";

const PopularAlbums = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 hover:underline">
          Popular albums
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-2">
        {popularAlbums.map(({ img, movie, singerList }, index) => (
          <div className="" key={index}>
            <Album img={img} movie={movie} singerList={singerList} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
