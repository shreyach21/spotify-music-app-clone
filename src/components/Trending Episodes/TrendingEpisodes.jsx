import React from "react";
import { episodeData } from "../../assets/assets";
import Episode from "./Episode";

const TrendingEpisodes = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex  mb-8 mt-6 items-center">
        <h1 className="md:text-3xl font-bold text-white pl-3 pt-16 sm:text-xl max-sm:text-xl ">
          Trending Episodes
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-8 xl:gap-x-3.5 md:gap-x-7 sm:gap-x-8 max-sm:gap-x-8 justify-center ">
        {episodeData.map(({ img, name, text }, index) => (
          <div
            className="w-[200px] min-h-[250px]"
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
