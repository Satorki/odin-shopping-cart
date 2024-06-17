import React from "react";
import PName from "../atoms/PName";
import PDescription from "../atoms/PDescription";
import PPrice from "../atoms/PPrice";

const ProductExtendedInfo = () => {
  return (
    <div className="text-white flex flex-col gap-2">
      <div className="text-xl">
        <PName />
      </div>
      <div className="">
        <PDescription />
      </div>
      <div className="text-lg">
        <PPrice />
      </div>
    </div>
  );
};

export default ProductExtendedInfo;
