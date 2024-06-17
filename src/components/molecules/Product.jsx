import React from "react";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";

const Product = () => {
  return (
    <div className="flex flex-col gap-3">
      <PImage />
      <div className="flex flex-col justify-center items-center w-96 py-2 bg-black rounded-lg">
        <PName />
        <PPrice />
      </div>
    </div>
  );
};

export default Product;
