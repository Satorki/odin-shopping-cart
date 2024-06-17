import React from "react";
import Navbar from "../components/molecules/Navbar";
import ProductInfo from "../components/organisms/ProductInfo";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <ProductInfo />
    </>
  );
};

export default ProductPage;

//M Navbar

//O ProductInfo
    //A PImage
    //M ProductExtendedInfo
        //A PName
        //A PDescription
        //A PPrice
        //A ButtonCartAdd
    //M Quantity
        //A InputQuantity
        //A QuantityButtons
