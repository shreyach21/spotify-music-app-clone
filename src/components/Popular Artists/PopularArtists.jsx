import React from "react";
import { artits } from "../../assets/assets";
import Artist from "./Artist";

const PopularArtists = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className=" mb-8 mt-6 items-center flex">
        <h1 className="md:text-3xl font-bold text-white pl-3 pt-16 sm:text-xl max-sm:text-xl">
          Popular artists
        </h1>
      </div>
      <div className="flex flex-wrap  gap-y-8 justify-center">
        {artits.map(({ img, name, id }) => (
          <div className="" key={id}>
            <Artist
              img={img}
              name={name}
              // className="size-[11.8rem]"
              className="xl:w-[188px] xl:h-[188px] md:w-[11.5rem] md:h-[11.5rem] sm:h-[12rem] sm:w-[12rem] max-sm:w-[12rem] max-sm:h-[12rem] "
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
