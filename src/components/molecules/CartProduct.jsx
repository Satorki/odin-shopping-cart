import React, { useContext } from "react";
import CartProductDeleteButton from "../atoms/CartProductDeleteButton";
import PImage from "../atoms/PImage";
import PName from "../atoms/PName";
import PPrice from "../atoms/PPrice";
import Quantity from "./Quantity";
import CartProductSubtotal from "../atoms/CartProductSubtotal";
import CartDataContext from "../organisms/CartDataProvider";

const CartProduct = ({imageData, nameData, priceData, quantityData, price, itemId, subtotal}) => {

console.log(itemId);

  return (
    <div className="flex justify-around my-5 mx-auto items-center w-9/12">
      <div className="flex items-center gap-10">
        <CartProductDeleteButton />
        <div className="w-24 h-24 bg-yellow-300 rounded-lg">
          <PImage imageData={imageData} />
        </div>
        <PName nameData={nameData}/>
      </div>
      <div className="flex items-center gap-10">
        <PPrice priceData={priceData}/>
        <Quantity quantityData={quantityData} itemId={itemId} />
        <CartProductSubtotal price={price} subtotal={subtotal}/>
      </div>
    </div>
  );
};

export default CartProduct;
