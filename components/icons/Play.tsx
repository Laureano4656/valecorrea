import React from "react";
import { iconType } from "./iconTypes";

const Play: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <svg
      className="border-black border-solid rounded-full border-border1"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.01 19"
    >
      <g>
        <g>
          <path d="M7.52,13.76l-.2,0a.91.91,0,0,1-.56-1V6.54a.87.87,0,0,1,.56-1,1.12,1.12,0,0,1,.91.24l1.22.7c1.24.71,2.5,1.43,3.71,2.14l.22.13.34.19a.83.83,0,0,1,.4.7.78.78,0,0,1-.41.67l-1.29.75-.86.5L8.31,13.44A1.54,1.54,0,0,1,7.52,13.76Zm.24-7.09V12.6l0,0,3.24-1.88.88-.5,1-.56h0l-.24-.14c-1.2-.71-2.46-1.43-3.7-2.14Z" />
        </g>
      </g>
    </svg>
  );
};

export default Play;
