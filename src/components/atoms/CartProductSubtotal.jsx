import React from "react";

const CartProductSubtotal = ({ price, subtotal }) => {

  

  const sum = parseInt(price) * parseInt(subtotal);

  return <>{sum} $</>;
};

export default CartProductSubtotal;
