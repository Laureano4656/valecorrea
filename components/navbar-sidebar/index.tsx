import React, { ReactNode } from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";
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
        className={` w-9/12  mt-[16vw] pb-8   m-marginRigth  min-h-[32vh] h-full`}
      >
        {children}
        {sideBar && <SideBar />}
      </div>
      <Footer />
    </div>
  );
};
export default NavSide;
