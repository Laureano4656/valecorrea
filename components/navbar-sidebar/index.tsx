import React, { ReactNode } from "react";
import NavBar from "../home/nav-bar";
import SideBar from "../home/nav-bar/years-side-bar";
import Footer from "../footer";
import ButtonAddNote from "../home/components/ui/button-add-note";

interface NavSideProps {
  children?: ReactNode;
  sideBar?: boolean;
}

const NavSide: React.FC<NavSideProps> = ({ children, sideBar }) => {
  return (
    <div className="relative flex-col pb-[150px] justify-between block h-screen sm:min-h-screen pt-28 sm:pt-0">
      <NavBar />
      <div className="relative w-full h-screen mx-auto sm:w-9/12 sm:pt-52">
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
