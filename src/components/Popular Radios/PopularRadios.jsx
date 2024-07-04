import React from "react";
import { popularRadios } from "../../assets/assets";
import Radio from "./Radio";

const PopularRadios = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 ">
          Popular radios
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-24">
        {popularRadios.map(({ img, radioName, singers }, index) => (
          <div className="size-52" key={index}>
            <Radio
              img={img}
              radioName={radioName}
              singers={singers}
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

export default PopularRadios;
