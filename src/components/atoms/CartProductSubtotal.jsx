import React, { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";

const CartProductSubtotal = ({ price, subtotalId }) => {
  const { uniqueCartItemsData } = useContext(CartDataContext);
  
  const subtotalItem = uniqueCartItemsData.find((item) => item.id === subtotalId);


  const sum = price * parseInt(subtotalItem.itemSubtotal);

  return <>{sum} $</>;
};

export default CartProductSubtotal;