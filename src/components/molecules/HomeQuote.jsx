import React from "react";
import ButtonStore from "../atoms/ButtonStore";
import Quote from "../atoms/Quote";

const HomeQuote = () => {
  return (
    <div className="bg-black/70 rounded-xl p-3">
      <Quote />
      <ButtonStore name={"STORE UP"} />
    </div>
  );
};

export default HomeQuote;
