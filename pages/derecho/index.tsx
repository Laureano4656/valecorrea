import React from "react";
import NavSide from "../../components/navbar-sidebar";
import LayoutHScreen from "../../components/utils/LayoutHScreen";
import { NextPage } from "next";

const Derecho: NextPage = () => {
  return (
    <LayoutHScreen>
      <NavSide sideBar />
      
    </LayoutHScreen>
  );
};

export default Derecho;
