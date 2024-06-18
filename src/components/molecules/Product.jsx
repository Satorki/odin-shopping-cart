import React from "react";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-96 h-96 bg-yellow-400 rounded-lg">
        <Link to={"/Product:id"} >
        <PImage />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-96 py-2 bg-black rounded-lg">
        <div className="text-lg text-white">
          <PName />
        </div>
        <div className="text-lg text-white">
          <PPrice />
        </div>
      </div>
    </div>
  );
};

export default Product;
