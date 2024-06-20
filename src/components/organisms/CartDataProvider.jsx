import { createContext, useState } from "react";

const CartDataContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [quantityItem, setQuantityItem] = useState(1);
  const [subtotalVal, setSubtotalVal] = useState(1);

  return (
    <CartDataContext.Provider
      value={{
        cartData,
        setCartData,
        quantityItem,
        setQuantityItem,
        subtotalVal,
        setSubtotalVal
      }}
    >
      {children}
    </CartDataContext.Provider>
  );
};

export default CartDataContext;
