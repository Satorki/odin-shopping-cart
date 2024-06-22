import React, { useContext, useEffect, useState } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const InputQuantity = ({ quantityData, itemId }) => {
  const { uniqueCartItemsData, setUniqueCartItemsData, setQuantityItem } =
    useContext(CartDataContext);
  const [internalQuantity, setInternalQuantity] = useState("1");

  useEffect(() => {
    setInternalQuantity(quantityData);
  }, [quantityData]);

  const updateQuantityItem = (e) => {
    let newValue;

    if (!/[a-zA-Z]/g.test(e.target.value)) {
      newValue = parseInt(e.target.value, 10);
    } else {
      newValue = "";
    }
    const updatedCartItems = uniqueCartItemsData.map((item) => {
      if (item.id === itemId) {
        return { ...item, itemSubtotal: newValue };
      }
      return item;
    });

    setInternalQuantity(newValue);
    setQuantityItem(newValue);
    setUniqueCartItemsData(updatedCartItems);
  };

  return (
    <>
      <input
        type="number"
        onChange={updateQuantityItem}
        className="w-10 h-10 bg-white border border-black rounded-md text-center"
        value={internalQuantity}
        min="0"
      />
    </>
  );
};

export default InputQuantity;
