import React from "react";
import { iconType } from "./iconTypes";

export const BarLoading: React.FC<iconType> = ({ size, color, background }) => {
  return (
    <div className={`relative w-[${size}] overflow-hidden`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.88 26.22">
        <g>
          <g>
            <rect
              fill="none"
              strokeWidth={"4.22px"}
              strokeMiterlimit={10}
              stroke="#000"
              x="2.11"
              y="2.11"
              width="133.67"
              height="22.01"
              rx="8.56"
            />
            <path
              className="overflow-hidden"
              d="M10.71,7.81H110.1a0,0,0,0,1,0,0v10.6a0,0,0,0,1,0,0H10.71a4.12,4.12,0,0,1-4.12-4.12V11.94a4.12,4.12,0,0,1,4.12-4.12Z"
            />
            <path
              d="M116.25,7.81h1.68a0,0,0,0,1,0,0v10.6a0,0,0,0,1,0,0h-1.68a4.12,4.12,0,0,1-4.12-4.12V11.94a4.12,4.12,0,0,1,4.12-4.12Z"
              transform="translate(230.07 26.22) rotate(-180)"
            />
            <path
              d="M123.79,7.81h1.68a0,0,0,0,1,0,0v10.6a0,0,0,0,1,0,0h-1.68a4.12,4.12,0,0,1-4.12-4.12V11.94a4.12,4.12,0,0,1,4.12-4.12Z"
              transform="translate(245.14 26.22) rotate(-180)"
            />
          </g>
        </g>
      </svg>
      <span className="absolute top-[50%] right-[5%]  w-[90%] flex justify-end h-[55%] translate-y-[-50%] overflow-hidden">
        <span className="relative flex w-[90%] h-[90%] ">
          <span className=" pathLoading"></span>
        </span>
      </span>
      {/* <span className="navSpan bg-red-600 z-[-10] rounded-[25px]  absolute left-[2%] top-[51%] translate-y-[-50%] "></span> */}
    </div>
  );
};

export default BarLoading;
