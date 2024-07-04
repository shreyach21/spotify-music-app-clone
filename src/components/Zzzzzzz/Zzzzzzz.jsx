import React from "react";
import { sleepImages } from "../../assets/assets";
import Item from "./Item";

const Zzzzzzz = () => {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="flex justify-between mb-8 mt-20 items-center">
        <h1 className="text-3xl font-bold text-white pl-3 pt-16 hover:underline">
          Zzzzzzz
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-2">
        {sleepImages.map(({ img, name, text }, index) => (
          <div className="" key={index}>
            <Item img={img} name={name} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zzzzzzz;
