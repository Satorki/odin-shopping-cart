import React from "react";
import PImage from "../atoms/PImage";
import ProductExtendedInfo from "../molecules/ProductExtendedInfo";
import Quantity from "../molecules/Quantity";
import ButtonCartAdd from "../atoms/ButtonCartAdd";

const ProductInfo = ({ imageData, nameData, descriptionData, priceData }) => {
  return (
    <div className="flex gap-10 justify-around p-10">
      <div className="w-1/2 rounded-lg">
        <PImage imageData={imageData} />
      </div>
      <div className="flex flex-col justify-between bg-black/70 rounded-lg p-5 w-1/2">
        <ProductExtendedInfo
          nameData={nameData}
          descriptionData={descriptionData}
          priceData={priceData}
        />
        <div className="flex justify-between">
          <Quantity />
          <ButtonCartAdd />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
