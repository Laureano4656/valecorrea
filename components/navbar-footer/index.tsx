import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import { AppProvider } from "../utils/AppProvider";

const NavBarFooter = ({ children }) => {
  return (
    <AppProvider>
      {/* h-screen */}
      <div className="flex flex-col justify-between w-full min-h-screen ">
        <NavBar maxWhith={true} />
        {children}
        <Footer />
      </div>
    </AppProvider>
  );
};

export default NavBarFooter;
