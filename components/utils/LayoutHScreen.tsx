import React from "react";
import Footer from "../footer";

const LayoutHScreen = ({ children }) => {
  return <div className="flex flex-col justify-between min-h-screen">{children}</div>;
};

export default LayoutHScreen;
