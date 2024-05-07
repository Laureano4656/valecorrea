import React, { FunctionComponent } from "react";
import styles from "./buttonBack.module.css";
interface Props {
  onClick: () => void;
  children: any;
  title?: string | any;
}
const ButtonBack: FunctionComponent<Props> = ({ onClick, children, title }) => {
  return (
    <button
      aria-label="Volver"
      className={`${styles.buttonBack} relative flex flex-col items-center justify-center font-playfairSemiBold`}
    >
      <div
        className="grid bg-black rounded-full w-14 h-14 place-items-center"
        onClick={onClick}
      >
        {children}
      </div>
      {title ? title : "volver"}
    </button>
  );
};

export default ButtonBack;
