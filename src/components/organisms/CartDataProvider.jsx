import { createContext, useContext, useState, useEffect } from "react";
import DataContext from "./ShopDataProvider";

const CartDataContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [quantityItem, setQuantityItem] = useState(1);
  const [subtotalVal, setSubtotalVal] = useState(1);
  const [uniqueCartItemsData, setUniqueCartItemsData] = useState([]);

  const shopData = useContext(DataContext);

  useEffect(() => {
    if (shopData) {
      const cartItemsData = cartData
        .map((cart) => {
          const cartToData = shopData.find(
            (item) => item.id === parseInt(cart.itemId)
          );
          if (cartToData) {
            return {
              ...cartToData,
              ...cart,
            };
          }
          return null;
        })
        .filter((item) => item !== null);

      setUniqueCartItemsData(
        Array.from(
          new Map(cartItemsData.map((item) => [item.id, item])).values()
        )
      );
    }
  }, [cartData, shopData]);

  if (!shopData) {
    return <div>Loading...</div>;
  }

  return (
    <CartDataContext.Provider
      value={{
        cartData,
        setCartData,
        quantityItem,
        setQuantityItem,
        subtotalVal,
        setSubtotalVal,
        uniqueCartItemsData,
        setUniqueCartItemsData,
      }}
    >
      {children}
    </CartDataContext.Provider>
  );
};

export default CartDataContext;
