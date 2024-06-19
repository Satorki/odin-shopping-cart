import React, { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const InputQuantity = () => {
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
      />
    </>
  );
};

export default InputQuantity;
