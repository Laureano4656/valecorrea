import React from "react";
import { iconType } from "./iconTypes";

export const Box: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <svg
      width={size ? size : "100%"}
      height={size ? size : "100%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.16 11.95"
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            fill={color ? color : "#fff"}
            d="M8.6,7.68l8-7.51A1.23,1.23,0,0,0,16,0H1.25A1.3,1.3,0,0,0,.46.29ZM17.16,1.2v0l-5.22,4.9,5.22,4.77V1.2ZM0,1.37v9.38c0,.08,0,.2,0,.29l5.22-4.9ZM11.15,6.85,9,8.84A.68.68,0,0,1,8.6,9a.53.53,0,0,1-.38-.16L6.09,6.89l-5.26,5a1.36,1.36,0,0,0,.42.08H16a1.42,1.42,0,0,0,.58-.17Z"
          />
        </g>
      </g>
    </svg>
  );
};
export default Box;
