import React from "react";
import ButtonStoreOpen from "../atoms/ButtonStoreOpen";
import Quote from "../atoms/Quote";
import { Link } from "react-router-dom";

const HomeQuote = () => {
  return (
    <div className="bg-black/70 rounded-xl p-3">
      <Quote />
      <Link to={"/Store"}>
        <ButtonStoreOpen name={"STORE UP"} />
      </Link>
    </div>
  );
};

export default HomeQuote;
