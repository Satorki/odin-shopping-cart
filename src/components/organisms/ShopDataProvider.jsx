import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const ShopDataProvider = ({ children }) => {
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setShopData(json))
      .catch((err) => console.error("Error fetching shop data:", err));
  }, []);

  return (
    <DataContext.Provider value={shopData}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
