import React from "react";
import NavBar from "../../components/home/nav-bar";
import LayoutHScreen from "../../components/utils/LayoutHScreen";
import Footer from "../../components/footer";

import Inspiration from "../../components/inspiration";
import { NextPage } from "next";

const inspiración:NextPage = () => {
  return (
    <LayoutHScreen>
      <NavBar />
      <Inspiration />
      <Footer />
    </LayoutHScreen>
  );
};

export default inspiración;
