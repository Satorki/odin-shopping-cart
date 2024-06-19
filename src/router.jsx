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
    errorElement: <ErrorPage />,
    children: [
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
      },
      {
        path: "/Product/:productId",
        element: <ProductPage />,
      },
    ]
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />,
  // },
]);
