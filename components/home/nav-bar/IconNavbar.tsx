import React from "react";
import Hammer from "../../icons/Hammer";
import { useRouter } from "next/router";
import Book from "../../icons/Book";
import Heart from "../../icons/Heart";
import Ligth from "../../icons/Ligth";
import Camera from "../../icons/Camera";
import ValeCorrea from "../../icons/ValeCorrea";
import styles from "./styles/iconNavbar.module.css";
const IconNavbar = () => {
  const router = useRouter();
  const iconMap = {
    derecho: (
      <div className={styles.iconNavbar}>
        <Hammer color="#fff" size="45%" />
      </div>
    ),
    psicologia: (
      <div className={styles.iconNavbar}>
        <Book color="#fff" size="45%" />
      </div>
    ),
    "sobre-mi": (
      <div className={styles.iconNavbar}>
        <ValeCorrea color="#fff" size="45%" />
      </div>
    ),
    filosofia: (
      <div className={styles.iconNavbar}>
        <Ligth color="#fff" size="45%" />
      </div>
    ),
    visual: (
      <div className={styles.iconNavbar}>
        <Camera color="#fff" size="45%" />
      </div>
    ),
    inspiracion: (
      <div className={styles.iconNavbar}>
        <Hammer color="#fff" size="45%" />
      </div>
    ),
    bienestar: (
      <div className={styles.iconNavbar}>
        <Hammer color="#fff" size="45%" />
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
