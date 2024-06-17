import React from "react";
import HomeBackground from "../atoms/HomeBackground";
import HomeQuote from "../molecules/HomeQuote";
import Quote from "../atoms/Quote";
import ButtonStore from "../atoms/ButtonStore";

const Hero = () => {
  return (
    <>
      <HomeBackground />
      <HomeQuote />
      <Quote />
      <ButtonStore />
    </>
  );
};

export default Hero;


