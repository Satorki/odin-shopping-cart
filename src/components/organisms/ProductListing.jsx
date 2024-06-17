import React from "react";
import Product from "../molecules/Product";

const ProductListing = () => {
  return (
    <div className="flex gap-10 m-5 flex-wrap">
      <Product />
      <Product />
    </div>
  );
};

export default ProductListing;
