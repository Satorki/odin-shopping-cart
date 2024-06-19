import React from "react";
import InputQuantity from "../atoms/InputQuantity";
import QuantityButtons from "../atoms/QuantityButtons";

const Quantity = ({quantityData}) => {
  return (
    <div className="flex">
      <InputQuantity quantityData={quantityData}/>
      <QuantityButtons />
    </div>
  );
};

export default Quantity;
