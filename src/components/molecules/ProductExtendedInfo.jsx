import React from "react";
import PName from "../atoms/PName";
import PDescription from "../atoms/PDescription";
import PPrice from "../atoms/PPrice";

const ProductExtendedInfo = ({ nameData, descriptionData, priceData }) => {
  return (
    <div className="text-white flex flex-col gap-2">
      <div className="text-xl">
        <PName nameData={nameData} />
      </div>
      <div className="">
        <PDescription descriptionData={descriptionData} />
      </div>
      <div className="text-lg">
        <PPrice priceData={priceData} />
      </div>
    </div>
  );
};

export default ProductExtendedInfo;
