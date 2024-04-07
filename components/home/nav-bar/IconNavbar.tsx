import React from "react";
import { useRouter } from "next/router";
import Book from "../../icons/Book";
import Ligth from "../../icons/Ligth";
import Camera from "../../icons/Camera";
import ValeCorrea from "../../icons/ValeCorrea";
import styles from "./styles/iconNavbar.module.css";
import Inspiration from "../../icons/Inspiration";
import Heart from "../../icons/Heart";

import hammer from "../../../static/icons/SVG/hammer-white.svg";
const IconNavbar = () => {
  const iconSize = "50%";
  const router = useRouter();
  const iconMap = {
    derecho: (
      <div className={styles.iconNavbar}>
        <img className="w-[60%]" src={`${hammer.src}`} alt="hammer" />
      </div>
    ),
    psicologia: (
      <div className={styles.iconNavbar}>
        <Book color="#fff" size={iconSize} fill={"#fff"} />
      </div>
    ),
    "sobre-mi": (
      <div className={styles.iconNavbar}>
        <ValeCorrea color="#fff" size={"40%"} />
      </div>
    ),
    filosofia: (
      <div className={styles.iconNavbar}>
        <Ligth color="#fff" size={iconSize} />
      </div>
    ),
    visual: (
      <div className={styles.iconNavbar}>
        <Camera color="#fff" size={iconSize} />
      </div>
    ),
    inspiracion: (
      <div className={styles.iconNavbar}>
        <Inspiration color="#fff" size={iconSize} />
      </div>
    ),
    bienestar: (
      <div className={styles.iconNavbar}>
        <Heart color="#fff" size={iconSize} />
      </div>
    ),
  };

  const getIconForPath = () => {
    for (const [key, value] of Object.entries(iconMap)) {
      if (router.pathname.includes(key)) {
        return value;
      }
    }
    return null;
  };

  return (
    <button
      onClick={() => {
        router.push("/home");
      }}
    >
      {getIconForPath()}
    </button>
  );
};

export default IconNavbar;
