import React from "react";
import NavSide from "../../components/navbar-sidebar";
import LayoutHScreen from "../../components/utils/LayoutHScreen";
import { NextPage } from "next";

const organico: NextPage = () => {
  return (
    <LayoutHScreen>
      <NavSide sideBar={true}></NavSide>
    </LayoutHScreen>
  );
};

export default organico;
