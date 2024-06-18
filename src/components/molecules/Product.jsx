import React from "react";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";

const Product = ({imageData, nameData, priceData}) => {

  return (
    <div className="w-80 h-max flex flex-col gap-3 hover:border-white border-black border-t-2 border-b-2 rounded-xl transition duration-300 cursor-pointer">
      <div className="bg-yellow-400 rounded-lg shadow-xl border-l-2 border-r-2 border-b-2 hover:border-white border-black transition duration-300">
          <PImage imageData={imageData}/>
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
