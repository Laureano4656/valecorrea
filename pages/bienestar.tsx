import React from "react";
import Footer from "../components/footer";
import NavSide from "../components/navbar-sidebar";
import LayoutHScreen from "../components/utils/LayoutHScreen";

const bienestar = () => {
  return (
    <LayoutHScreen>
      <NavSide />
      <Footer />
    </LayoutHScreen>
  );
};

export default bienestar;
