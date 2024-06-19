import React, { useContext } from "react";
import ProductInfo from "../components/organisms/ProductInfo";
import DataContext from "../components/organisms/ShopDataProvider";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const itemId = useParams();
  const shopData = useContext(DataContext);

  if (!shopData) {
    return <div>Loading...</div>;
  }

  const itemData = shopData.filter((data) => {
    return data.id === parseInt(itemId.productId);
  });

  const product = itemData[0]


  return (
    <div className="bg-green-700 min-h-screen">
      <ProductInfo
        key={product.id}
        imageData={product.image}
        nameData={product.title}
        descriptionData={product.description}
        priceData={product.price}
      />
    </div>
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
