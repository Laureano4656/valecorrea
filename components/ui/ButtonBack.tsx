import React from "react";
import styles from "./buttonBack.module.css"
const ButtonBack = ({ onClick, children }) => {
  return (
    <button
      aria-label="Volver"
      className={`${styles.buttonBack} flex flex-col items-center justify-center font-playfairSemiBold`}
    >
      <div
        className="grid bg-black rounded-full w-14 h-14 place-items-center"
        onClick={onClick}
      >
        {children}
      </div>
      Volver
    </button>
  );
};

export default ButtonBack;
