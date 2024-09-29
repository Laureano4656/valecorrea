import React from "react";
import NavSide from "../../components/navbar-sidebar";
import LayoutHScreen from "../../components/utils/LayoutHScreen";
import { NextPage } from "next";

const bienestar: NextPage = () => {
  return (
    <LayoutHScreen>
       <NavSide sideBar={true} />
    </LayoutHScreen>
  );
};

export default bienestar;
