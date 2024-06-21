import React, { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const CartProductDeleteButton = ({ buttonId }) => {
  const { uniqueCartItemsData, setUniqueCartItemsData } =
    useContext(CartDataContext);

  const deleteCartItem = () => {
    const newCartItemsData = uniqueCartItemsData.filter(
      (item) => item.id !== buttonId
    );
    setUniqueCartItemsData(newCartItemsData);
  };

  return (
    <button
      onClick={deleteCartItem}
      className="border border-black rounded-full w-10 h-10 flex justify-center items-center hover:border-green-300 hover:text-green-300"
    >
      X
    </button>
  );
};

export default CartProductDeleteButton;
