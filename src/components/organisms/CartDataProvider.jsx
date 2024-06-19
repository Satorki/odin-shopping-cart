import { createContext, useState } from "react";

const CartDataContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [quantityItem, setQuantityItem] = useState()

  return (
    <CartDataContext.Provider value={{cartData, setCartData, quantityItem, setQuantityItem}}>
      {children}
    </CartDataContext.Provider>
  );
};

export default CartDataContext;
