import React from "react";
import ButtonStoreOpen from "../atoms/ButtonStoreOpen";
import Quote from "../atoms/Quote";

const HomeQuote = () => {
  return (
    <div className="bg-black/70 rounded-xl p-3">
      <Quote />
      <ButtonStoreOpen name={"STORE UP"} />
    </div>
  );
};

export default HomeQuote;
