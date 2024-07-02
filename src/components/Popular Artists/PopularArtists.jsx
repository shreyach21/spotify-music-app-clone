import React from "react";
import { artits } from "../../assets/assets";
import Artist from "./Artist";

const PopularArtists = () => {
  return (
    <div className="flex flex-col mx-3 ">
      <div className="flex justify-between mb-8 mt-24 items-center">
        <h1 className="text-4xl font-medium text-white pl-3">
          Popular artists
        </h1>
      </div>
      <div className="flex flex-wrap  gap-y-8">
        {artits.map(({ img, name, id }) => (
          <div className="" key={id}>
            <Artist
              img={img}
              name={name}
              className="w-[13.2rem] h-[13.2rem]"
              nameSize="text-base"
              textSize="text-[15px]"
            />
            <p className="text-lg">Hii</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
