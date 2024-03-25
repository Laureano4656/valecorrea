import React from "react";

import { iconType } from "./iconTypes";

export const AddIcon: React.FC<iconType> = ({ size }) => {
  return (
    <svg
      width={size ? size : "25px"}
      height={size ? size : "25px"}
      viewBox="0 0 41 41.32"
    >
      <g>
        <g>
          <path d="M20.5,0A20.66,20.66,0,1,1,0,20.66,20.58,20.58,0,0,1,20.5,0" />
          <text transform="translate(14.83 26.62) scale(0.99 1)">+</text>
        </g>
      </g>
    </svg>
  );
};

export default AddIcon;
