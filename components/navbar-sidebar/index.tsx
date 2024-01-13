import React, { ReactNode } from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";
import { AppProvider } from "../utils/AppProvider";
import Footer from "../footer";

export interface props {
  children?: ReactNode;
  sideBar?: boolean;
}

const NavSide: React.FC<props> = ({ children, sideBar }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <NavBar />
      <div
        className={`flex w-9/12  items-start justify-end pt-[5%]   mx-auto max-w-7xl h-[60vh]`}
      >
        {children}
        {sideBar && <SideBar />}
      </div>
      <Footer />
    </div>
  );
};
export default NavSide;
