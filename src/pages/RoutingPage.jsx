import React from "react";
import Navbar from "../components/molecules/Navbar";
import { Outlet } from "react-router-dom";
import { ShopDataProvider } from "../components/organisms/ShopDataProvider";
import { CartDataProvider } from "../components/organisms/CartDataProvider";

const RoutingPage = () => {
  return (
    <>
      <Navbar />
      <ShopDataProvider>
        <CartDataProvider>
          <Outlet />
        </CartDataProvider>
      </ShopDataProvider>
    </>
  );
};

export default RoutingPage;
