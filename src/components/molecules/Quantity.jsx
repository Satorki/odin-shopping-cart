import React from "react";
import InputQuantity from "../atoms/InputQuantity";
import QuantityButtons from "../atoms/QuantityButtons";

const Quantity = ({ quantityData, itemId }) => {
  return (
    <div className="flex">
      <InputQuantity quantityData={quantityData} itemId={itemId} />
      <QuantityButtons />
    </div>
  );
};

export default Quantity;
