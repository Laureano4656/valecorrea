import React, { FunctionComponent } from "react";
import { iconType } from "./iconTypes";

const Arrow: FunctionComponent<iconType> = ({ className,size, ...rest }) => {
  return (
    <svg
      className={className}
      aria-label="Siguiente"
      fill="currentColor"
      height={size ? size : "100%"}
      role="img"
      viewBox="0 0 24 24"
      width={size ? size : "100%"}
      {...rest}
    >
      <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
    </svg>
  );
};

export default Arrow;
