import React, { ReactNode } from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";
import Footer from "../footer";
import ButtonAddNote from "../home/components/ui/button-add-note";

export interface props {
  children?: ReactNode;
  sideBar?: boolean;
}

const NavSide: React.FC<props> = ({ children, sideBar }) => {
  return (
    // h-[calc(100vh+150px)]
    <div className="relative flex-col pb-[150px] justify-between block h-screen sm:min-h-screen pt-28 sm:pt-0">
      <NavBar />
      <div
        //  sm:mt-[16vw] pb-8  sm:m-marginRigth  sm:min-h-[32vh]
        className={`relative w-full sm:w-9/12 h-screen mx-auto sm:pt-52`}
      >
        {children}

        {sideBar && <SideBar />}
        <div className="block sm:hidden">
          <ButtonAddNote />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default NavSide;
