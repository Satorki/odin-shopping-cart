import React, { useContext, useEffect, useState } from "react";
import CartTable from "../atoms/CartTable";
import CartProduct from "../molecules/CartProduct";
import CartDataContext from "./CartDataProvider";

const ProductCartList = () => {
  const { uniqueCartItemsData } = useContext(CartDataContext);
  const { subtotalVal } = useContext(CartDataContext);

  console.log(uniqueCartItemsData);

  return (
    <>
      <CartTable />
      {uniqueCartItemsData.map((item) => (
        <CartProduct
          key={item.id}
          imageData={item.image}
          nameData={item.title}
          priceData={item.price}
          quantityData={item.itemQuantity}
          price={item.price}
          itemId={item.id}
          subtotal={subtotalVal}
          buttonId={item.id}
        />
      ))}
    </>
  );
};

export default ProductCartList;
