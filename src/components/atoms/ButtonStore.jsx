import React from "react";

const ButtonStore = ({ name }) => {
  return <button className="px-5 py-2 bg-green-200 w-32 rounded-md hover:shadow-custom-hover active:shadow-custom-active">{name}</button>;
};

export default ButtonStore;
