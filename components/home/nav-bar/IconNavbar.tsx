import React from "react";
import Hammer from "../../icons/Hammer";
import { useRouter } from "next/router";
import Book from "../../icons/Book";
import Heart from "../../icons/Heart";
import Ligth from "../../icons/Ligth";
import Camera from "../../icons/Camera";
import ValeCorrea from "../../icons/ValeCorrea";

const IconNavbar = () => {
  const router = useRouter();
  const styles =
    "w-[70px] min-w-[70px] rounded-full flex justify-center items-center bg-black h-[70px]";

  const iconMap = {
    derecho: (
      <div className={styles}>
        <Hammer color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    psicologia: (
      <div className={styles}>
        <Book color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    "sobre-mi": (
      <div className={styles}>
        <ValeCorrea color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    filosofia: (
      <div className={styles}>
        <Ligth color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    visual: (
      <div className={styles}>
        <Camera color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    inspiracion: (
      <div className={styles}>
        <Hammer color="#fff" size="90%" background={"p-2"} />
      </div>
    ),
    bienestar: (
      <div className={styles}>
        <Hammer color="#fff" size="90%" background={"p-2"} />
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
