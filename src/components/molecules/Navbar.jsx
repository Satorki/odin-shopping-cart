import React from "react";
import Logo from "../atoms/Logo";
import NavbarLink from "../atoms/NavbarLink";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-green-300 p-3 items-center">
      <NavLink to={"/Home"}>
        <Logo />
      </NavLink>
      <div className="flex gap-10 mr-10">
        <NavLink
          to={"/Store"}
          className={({ isActive }) =>
            isActive ? "border-b border-black border-dashed" : ""
          }
        >
          <NavbarLink name={"Store"} />
        </NavLink>
        <NavLink
          to={"/Cart"}
          className={({ isActive }) =>
            isActive ? "border-b border-black border-dashed" : ""
          }
        >
          <NavbarLink name={"Cart"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
