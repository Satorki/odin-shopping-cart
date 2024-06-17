import React from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-green-300 p-3 items-center">
      <Logo />
      <div className="flex justify-between">
      <NavLink name={"Store"}/>
      <NavLink name={"Cart"}/>
      </div>
    </div>
  );
};

export default Navbar;
