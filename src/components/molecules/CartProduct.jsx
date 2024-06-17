import React from "react";
import CartProductDeleteButton from "../atoms/CartProductDeleteButton";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";
import Quantity from "./Quantity";
import CartProductSubtotal from "../atoms/CartProductSubtotal";

const CartProduct = () => {
  return (
    <div className="flex justify-around my-5 mx-auto items-center w-9/12">
      <div className="flex items-center gap-10">
        <CartProductDeleteButton />

        <div className="w-24 h-24 bg-yellow-300 rounded-lg">
          <PImage />
        </div>
        <PName />
      </div>
      <div className="flex items-center gap-10">
        <PPrice />
        <Quantity />
        <CartProductSubtotal />
      </div>
    </div>
  );
};

export default CartProduct;
