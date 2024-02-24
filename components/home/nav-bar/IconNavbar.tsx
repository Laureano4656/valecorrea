import React from "react";
import Hammer from "../../icons/Hammer";
import { useRouter } from "next/router";
import Book from "../../icons/Book";
import Ligth from "../../icons/Ligth";
import Camera from "../../icons/Camera";
import ValeCorrea from "../../icons/ValeCorrea";
import styles from "./styles/iconNavbar.module.css";
import Inspiration from "../../icons/Inspiration";
import Heart from "../../icons/Heart";
const IconNavbar = () => {
  const router = useRouter();
  const iconMap = {
    derecho: (
      <div className={styles.iconNavbar}>
        <Hammer color="#fff" size="50%" />
      </div>
    ),
    psicologia: (
      <div className={styles.iconNavbar}>
        <Book color="#fff" size="50%" fill={"#fff"}/>
      </div>
    ),
    "sobre-mi": (
      <div className={styles.iconNavbar}>
        <ValeCorrea color="#fff" size="50%" />
      </div>
    ),
    filosofia: (
      <div className={styles.iconNavbar}>
        <Ligth color="#fff" size="50%" />
      </div>
    ),
    visual: (
      <div className={styles.iconNavbar}>
        <Camera color="#fff" size="50%" />
      </div>
    ),
    inspiracion: (
      <div className={styles.iconNavbar}>
        <Inspiration color="#fff" size="50%" />
      </div>
    ),
    bienestar: (
      <div className={styles.iconNavbar}>
        <Heart color="#fff" size="50%" />
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

  return getIconForPath();
};

export default IconNavbar;
