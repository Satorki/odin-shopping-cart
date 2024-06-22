import React from "react";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";

const Product = ({ imageData, nameData, priceData }) => {
  return (
    <div className="w-72 h-80 flex flex-col justify-center gap-3 rounded-xl cursor-pointer hover:bg-green-500 bg-green-600">
      <div className="flex justify-center bg-center h-44 rounded-lg">
        <PImage imageData={imageData} />
      </div>
      <div className="flex flex-col justify-center items-center py-2 bg-black rounded-lg shadow-xl">
        <div className="text-lg text-white text-center">
          <PName nameData={nameData} />
        </div>
        <div className="text-lg text-yellow-300">
          <PPrice priceData={priceData} />
        </div>
      </div>
    </div>
  );
};

export default Product;
