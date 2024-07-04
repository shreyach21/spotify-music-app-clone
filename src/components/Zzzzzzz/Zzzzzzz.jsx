import React from "react";
import { sleepImages } from "../../assets/assets";
import Item from "./Item";

const Zzzzzzz = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16">Zzzzzzz</h1>
      </div>
      <div className="flex flex-wrap gap-y-24">
        {sleepImages.map(({ img, name, text }, index) => (
          <div className="size-52" key={index}>
            <Item
              img={img}
              name={name}
              text={text}
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

export default Zzzzzzz;
