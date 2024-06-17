import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  //  <React.StrictMode>
  <>
    <HomePage />
    <ProductPage />
    <StorePage />
    <CartPage />
  </>
  //  </React.StrictMode>,
);
