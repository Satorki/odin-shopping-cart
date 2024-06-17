import React from "react";
import InputQuantity from "../atoms/InputQuantity";
import QuantityButtons from "../atoms/QuantityButtons";

const Quantity = () => {
  return (
    <div className="flex">
      <InputQuantity />
      <QuantityButtons />
    </div>
  );
};

export default Quantity;
