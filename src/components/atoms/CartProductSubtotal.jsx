import React from "react";

const CartProductSubtotal = ({ price, input }) => {
  const sum = parseInt(price) * parseInt(input);

  console.log(price);
  console.log(parseInt(input));

  return <>{sum}</>;
};

export default CartProductSubtotal;
