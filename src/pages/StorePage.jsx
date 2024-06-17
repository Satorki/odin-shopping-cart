import React from "react";
import Navbar from "../components/molecules/Navbar";
import ProductListing from "../components/organisms/ProductListing";

const StorePage = () => {
  return (
    <div className="bg-green-700">
      <Navbar />
      <ProductListing />
    </div>
  );
};

export default StorePage;

//M Navbar

//O ProductListing
//M Product
//A PImage
//A PName
//A PPrice
