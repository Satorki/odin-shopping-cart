import React, { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const CartProductDeleteButton = ({ buttonId }) => {
  const { cartData, setCartData } = useContext(CartDataContext);

  const deleteCartItem = () => {
    const newCartData = cartData.filter((item) => item.itemId !== buttonId.toString());
    setCartData(newCartData);
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
