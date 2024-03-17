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
import Link from "next/link";
import { disabledAnimationHome } from "../../../globals/homeAnimations";
const IconNavbar = () => {
  const { setAnimationsHome } = disabledAnimationHome();
  const iconSize = "50%";
  const router = useRouter();
  const iconMap = {
    derecho: (
      <div className={styles.iconNavbar}>
        <Hammer color="#fff" size={iconSize} />
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
        setAnimationsHome(true);
        router.push("/");
      }}
    >
      {getIconForPath()}
    </button>
  );
};

export default IconNavbar;
