import { useContext } from "react";
import Product from "../molecules/Product";
import DataContext from "./ShopDataProvider";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const shopData = useContext(DataContext);

  if (!shopData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5 p-5 flex-wrap bg-green-700 justify-around items-end">
      {shopData.map((data) => (
        <Link key={data.id} to={`/Product/${data.id}`}>
          <Product
            imageData={data.image}
            nameData={data.title}
            priceData={data.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
