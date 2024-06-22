import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";
import RoutingPage from "./pages/RoutingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutingPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/Cart",
        element: <CartPage />,
      },
      {
        path: "/Store",
        element: <StorePage />,
      },
      {
        path: "/Product/:productId",
        element: <ProductPage />,
      },
    ]
  },
]);
