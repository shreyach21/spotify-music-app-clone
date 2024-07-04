import React from "react";
import { featuredCharts } from "../../assets/assets";

const FeaturedCharts = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 hover:underline">
          Featured Charts
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-2">
        {featuredCharts.map(({ img, name, text }, index) => (
          <div className="" key={index}>
            <Radio img={img} name={name} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharts;
