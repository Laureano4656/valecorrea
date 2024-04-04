import React from "react";
import NavSide from "../../components/navbar-sidebar";
import { NextPage } from "next";
import LayoutHScreen from "../../components/utils/LayoutHScreen";

const visual: NextPage = () => {
  return (
    <LayoutHScreen>
      <NavSide sideBar={true}></NavSide>
    </LayoutHScreen>
  );
};

export default visual;
