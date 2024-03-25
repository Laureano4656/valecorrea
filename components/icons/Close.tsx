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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <circle cx="12" cy="12" r="11.5" />
          <path d="M12,1A11,11,0,1,1,1,12,11,11,0,0,1,12,1m0-1A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" />
          <text transform="translate(7.87 16.99)">x</text>
        </g>
      </g>
    </svg>
  );
};

export default Close;
