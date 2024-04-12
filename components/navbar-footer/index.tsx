import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import styles from "./styles/NavBarFooter.module.css";
const NavBarFooter = ({ children }) => {
  return (
    <>
      <div className={`${styles.container} w-full min-h-calcNavFooter`}>
        <NavBar maxWhith={true} />
        <div className="pl-[4vw]">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default NavBarFooter;
