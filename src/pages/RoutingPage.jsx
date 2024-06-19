import React from "react";
import Navbar from "../components/molecules/Navbar";
import { Outlet } from "react-router-dom";
import { ShopDataProvider } from "../components/organisms/ShopDataProvider";

const RoutingPage = () => {
  return (
    <>
      <Navbar />
      <ShopDataProvider>
        <Outlet />
      </ShopDataProvider>
    </>
  );
};

export default RoutingPage;
