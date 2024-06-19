import React, { useContext } from "react";
import CartTable from "../atoms/CartTable";
import CartProduct from "../molecules/CartProduct";
import CartDataContext from "./CartDataProvider";
import DataContext from "./ShopDataProvider";

const ProductCartList = () => {
  const { cartData } = useContext(CartDataContext);
  const shopData = useContext(DataContext);

  if (!shopData) {
    return <div>Loading...</div>;
  }

  const cartItemsData = cartData.map((cart) => {
    const cartToData = shopData.find(
      (item) => item.id === parseInt(cart.itemId)
    );
    if (cartToData) {
      return {
        ...cartToData,
        ...cart,
      };
    }
  });

  const uniqueCartItemsData = Array.from(
    new Map(cartItemsData.map((item) => [item.id, item])).values()
  );


  return (
    <>
      <CartTable />
      {uniqueCartItemsData.map((item) => 
      <CartProduct 
      key={item.id}
      imageData={item.image}
      nameData={item.title}
      priceData={item.price}
      quantityData={item.itemQuantity}
      price={item.price}
      input={item.itemQuantity}
      />
      )}
    </>
  );
};

export default ProductCartList;
