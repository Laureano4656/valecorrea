import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import { AppProvider } from "../utils/AppProvider";

const NavBarFooter = ({ children }) => {
  return (
    <AppProvider>
      <div className="flex flex-col justify-center w-full h-screen min-h-screen ">
        <NavBar maxWhith={true} />
        {children}
        <Footer />
      </div>
    </AppProvider>
  );
};

export default NavBarFooter;
