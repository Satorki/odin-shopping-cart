import React from "react";
import HeroImage from "../../assets/lukasz-niescioruk-x61c6dg7jkU-unsplash.jpg";

const HomeBackground = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <img src={HeroImage} alt="" className="absolute "/>
    </div>
  );
};

export default HomeBackground;
