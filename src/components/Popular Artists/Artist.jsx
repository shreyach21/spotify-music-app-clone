import React from "react";

const Artist = ({ img, name }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <img src={img} alt={name} className="rounded-full w-20 h-20" />
      </div>
      <p>{name}</p>
      <p>Artist</p>
    </div>
  );
};

export default Artist;
