import React from "react";
import Product from "../molecules/Product";
import { ShopDataFetching } from "./ShopDataFetching";

const ProductListing = () => {
  const shopData = ShopDataFetching();

  if (!shopData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5 p-5 flex-wrap bg-green-700 justify-around items-end">
      {shopData.map((data) => {
        return (<Product key={data.id} imageData={data.image} nameData={data.title} priceData={data.price}/>);
      })}
    </div>
  );
};

export default ProductListing;
