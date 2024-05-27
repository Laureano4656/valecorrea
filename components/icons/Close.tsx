import React from "react";
import { iconType } from "./iconTypes";
export const Close: React.FC<iconType> = ({
  size,
  color,
  background,
  onClick,
  className,
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={size ? size : "100%"}
      height={size ? size : "100%"}
      viewBox="0 0 24 24"
    >
      <g fill={background ? background : "#fff"}>
        <g >
          <circle cx="12" cy="12" r="11.5" />
        
          <text fill={color ? color : "#000"} transform="translate(7.5 16)">
            x
          </text>
        </g>
      </g>
    </svg>
  );
};

export default Close;
