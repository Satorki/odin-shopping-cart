import { useContext } from "react";
import CartDataContext from "../organisms/CartDataProvider";
import { useParams } from "react-router-dom";

const ButtonCartAdd = () => {
  const { productId } = useParams();
  const { cartData, setCartData, quantityItem } = useContext(CartDataContext);

  const updateCartData = () => {
    setCartData([
      ...cartData,
      {
        itemId: productId,
        itemQuantity: quantityItem,
        itemSubtotal: quantityItem,
      },
    ]);
  };

  return (
    <button
      className="px-5 py-2 bg-green-200 w-42 rounded-md hover:shadow-custom-hover active:shadow-custom-active"
      onClick={updateCartData}
    >
      Button Cart Add
    </button>
  );
};

export default ButtonCartAdd;
