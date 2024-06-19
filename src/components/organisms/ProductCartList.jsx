import React, { useContext } from "react";
import CartTable from "../atoms/CartTable";
import CartProduct from "../molecules/CartProduct";
import CartDataContext from "./CartDataProvider";

const ProductCartList = () => {
  const { cartData } = useContext(CartDataContext);

  console.log(cartData);

  return (
    <>
      <CartTable />
      {cartData.map((item) => {
      <CartProduct key={item.itemid}
      />
      })}
    </>
  );
};

export default ProductCartList;
