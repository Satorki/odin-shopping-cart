import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Cart",
    element: <CartPage />,
  },
  {
    path: "/Store",
    element: <StorePage />,
    children: [
      {
        path: "Product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);
