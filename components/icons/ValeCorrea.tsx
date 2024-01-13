import React from "react";
import { iconType } from "./iconTypes";
export const ValeCorrea: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <svg
      height={size ? size : "100%"}
      width={size ? size : "100%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.45 17.02"
      className={`${background ? background : " " } `}
    >
      <g id="Capa_2"  data-name="Capa 2" stroke={color ? color : "#000"}>
        <g id="Capa_1-2 "  data-name="Capa 1" stroke={color ? color : "#000"}>
          <polygon stroke={color ? color : "#000"} points="3.25 1 4.13 1 9.2 14.25 8.76 15.44 3.25 1" />
          <polygon  stroke={color ? color : "#000"} points="17.45 0 12.02 0 12.02 0.85 14.37 0.85 9.79 12.98 5.15 0.85 7.54 0.85 7.54 0 0.27 0 0 0 0 0.85 2.12 0.85 8.29 17.02 9.23 17.02 15.33 0.85 17.45 0.85 17.45 0 17.45 0" />
        </g>
      </g>
    </svg>
  );
};

export default ValeCorrea;
