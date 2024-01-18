import React from "react";
import { Caroussel } from "./";

const CuisinePage = () => {
  return (
    <div className="bg-stone-300">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-lime-300">
        Cuisines
        <Caroussel />
      </div>
    </div>
  );
};

export default CuisinePage;
