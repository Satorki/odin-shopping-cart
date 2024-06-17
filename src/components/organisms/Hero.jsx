import React from "react";
import HomeBackground from "../atoms/HomeBackground";
import HomeQuote from "../molecules/HomeQuote";

const Hero = () => {
  return (
    <div className="relative">
      <HomeBackground />
      <div className="absolute inset-0 max-w-xl flex items-center mx-auto">
      <HomeQuote />
      </div>
    </div>
  );
};

export default Hero;


