import React from "react";
import HeroImage from "../../assets/hero.jpg";

const HomeBackground = () => {
  return (
    <div className="h-screen">
      <img src={HeroImage} alt="" className="h-full w-full object-cover"/>
    </div>
  );
};

export default HomeBackground;
