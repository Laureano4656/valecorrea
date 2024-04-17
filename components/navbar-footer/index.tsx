import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import styles from "./styles/NavBarFooter.module.css";
import { useRouter } from "next/router";
const NavBarFooter = ({ children }) => {
  return (
    <>
      <div className={`${styles.container} w-full min-h-calcNavFooter`}>
        <NavBar maxWhith={true} />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default NavBarFooter;
