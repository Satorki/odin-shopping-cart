import React from "react";
import InputQuantity from "../atoms/InputQuantity";

const Quantity = ({ quantityData, itemId }) => {
  return (
    <div className="flex">
      <InputQuantity quantityData={quantityData} itemId={itemId} />
    </div>
  );
};

export default Quantity;
