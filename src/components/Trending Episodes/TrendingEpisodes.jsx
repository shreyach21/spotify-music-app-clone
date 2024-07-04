import React from "react";
import { episodeData } from "../../assets/assets";
import Episode from "./Episode";

const TrendingEpisodes = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 ">
          Trending Episodes
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-24">
        {episodeData.map(({ img, name, text }, index) => (
          <div
            className="size-52"
            key={index}
            nameSize="text-[15px] tracking-wide "
            textSize="text-[13px] leading-relaxed"
          >
            <Episode img={img} name={name} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingEpisodes;
