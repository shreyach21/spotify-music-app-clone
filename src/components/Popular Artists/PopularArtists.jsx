import React from "react";
import { artits } from "../../assets/assets";
import Artist from "./Artist";

const PopularArtists = () => {
  return (
    <div className="flex flex-col mx-2">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 hover:underline">
          Popular artists
        </h1>
      </div>
      <div className="flex flex-wrap  gap-y-8">
        {artits.map(({ img, name, id }) => (
          <div className="" key={id}>
            <Artist
              img={img}
              name={name}
              className="size-[11.8rem]"
              nameSize="text-[15px] tracking-wide"
              textSize="text-[13px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
