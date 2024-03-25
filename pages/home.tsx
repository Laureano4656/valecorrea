import { NextPage } from "next";
import React from "react";
import IconsTouch from "../components/home";

const home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <IconsTouch />
    </div>
  );
};

export default home;
