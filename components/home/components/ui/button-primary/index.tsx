import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customProp?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default ButtonPrimary;
