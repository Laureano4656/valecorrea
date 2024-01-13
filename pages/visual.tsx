import React from "react";
import LayoutHScreen from "../components/utils/LayoutHScreen";
import Footer from "../components/footer";
import NavSide from "../components/navbar-sidebar";

const visual = () => {
  return (
    <LayoutHScreen>
      <NavSide />
      <Footer />
    </LayoutHScreen>
  );
};

export default visual;
