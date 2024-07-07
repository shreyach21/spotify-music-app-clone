import React from "react";
import { sleepImages } from "../../assets/assets";
import Item from "./Item";

const Zzzzzzz = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex mb-8 mt-6 items-center">
        <h1 className="md:text-3xl font-bold text-white pl-3 pt-16 sm:text-xl max-sm:text-xl">
          Zzzzzzz
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-8 xl:gap-x-3.5 md:gap-x-7 sm:gap-x-8 max-sm:gap-x-8 justify-center">
        {sleepImages.map(({ img, name, text }, index) => (
          <div className="w-[200px] min-h-[250px] " key={index}>
            <Item
              img={img}
              name={name}
              text={text}
              className="xl:w-[188px] xl:h-[188px] md:w-[11.5rem] md:h-[11.5rem] sm:h-[12rem] sm:w-[12rem] max-sm:w-[12rem] max-sm:h-[12rem]"
              nameSize="text-[15px] tracking-wide "
              textSize="text-[13px] leading-relaxed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zzzzzzz;
