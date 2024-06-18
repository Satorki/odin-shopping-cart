import React from "react";
import Navbar from "../components/molecules/Navbar";
import { Outlet } from "react-router-dom";

const RoutingPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RoutingPage;
