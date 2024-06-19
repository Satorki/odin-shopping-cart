import React, { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const InputQuantity = ({quantityData}) => {
  const { setQuantityItem } = useContext(CartDataContext);

  const updateQuantityItem = (e) => {
    setQuantityItem(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={updateQuantityItem}
        className="w-10 bg-white border border-black rounded-md text-center"
        value={quantityData}
      />
    </>
  );
};

export default InputQuantity;
