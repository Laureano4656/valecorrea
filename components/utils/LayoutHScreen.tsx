import React from "react";
import Footer from "../footer";

const LayoutHScreen = ({ children }) => {
  // min-h-screen
  return <div className="flex flex-col justify-between ">{children}</div>;
};

export default LayoutHScreen;
