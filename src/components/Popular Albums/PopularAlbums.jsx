import React from "react";
import { popularAlbums } from "../../assets/assets";
import Album from "./Album";

const PopularAlbums = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className=" mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 ">
          Popular albums
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-24">
        {popularAlbums.map(({ img, movie, singerList }, index) => (
          <div className="size-52 " key={index}>
            <Album
              img={img}
              movie={movie}
              singerList={singerList}
              className=""
              nameSize="text-[15px] tracking-wide "
              textSize="text-[13px] leading-relaxed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
