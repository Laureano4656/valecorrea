import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import { AppProvider } from "../utils/AppProvider";
import styles from "./styles/NavBarFooter.module.css";
const NavBarFooter = ({ children }) => {
  return (
    <>
      {/* <div className="flex flex-col justify-between w-full min-h-calcNavFooter"> */}
      <div className={`${styles.container} w-full min-h-calcNavFooter`}>
        <NavBar maxWhith={true} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NavBarFooter;
