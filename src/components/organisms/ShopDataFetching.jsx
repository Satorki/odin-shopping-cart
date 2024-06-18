import { useEffect, useState } from "react";

export const ShopDataFetching = () => {
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setShopData(json))
      .catch((err) => console.error("Error fetching shop data:", err));
  }, []);

  return shopData;
};
