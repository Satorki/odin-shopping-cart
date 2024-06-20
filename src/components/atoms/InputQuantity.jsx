import React, { useContext, useEffect, useState } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const InputQuantity = ({ quantityData, itemId }) => {
  const { setQuantityItem, setSubtotalVal } = useContext(CartDataContext);
  const [internalQuantity, setInternalQuantity] = useState(1);

    


  useEffect(() => {
    setInternalQuantity(quantityData);
  }, [quantityData]);

  const updateQuantityItem = (e) => {
    const newValue = e.target.value;
    setInternalQuantity(newValue);
    setQuantityItem(newValue);
    setSubtotalVal(itemId, newValue);
  };


  return (
    <>
      <input
        type="text"
        onChange={updateQuantityItem}
        className="w-10 bg-white border border-black rounded-md text-center"
        value={internalQuantity}
      />
    </>
  );
};

export default InputQuantity;
