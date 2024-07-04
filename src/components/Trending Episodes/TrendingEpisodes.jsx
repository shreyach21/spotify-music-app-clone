import React from "react";
import { episodeData } from "../../assets/assets";
import Episode from "./Episode";

const TrendingEpisodes = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 hover:underline">
          Trending Episodes
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-2">
        {episodeData.map(({ img, name, text }, index) => (
          <div className="" key={index}>
            <Episode img={img} name={name} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingEpisodes;
