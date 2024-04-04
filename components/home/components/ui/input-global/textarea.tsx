import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import styles from "./styles/global-input.module.css";

export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  border?: boolean;
  notBorderFocus?: boolean;
  className?: string;
  inputClassName?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  zIndex?: string;
  imageValue?: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  placeholder,
  name,
  onChange,
  value,
  className,
  border,
  notBorderFocus,
  style,
  zIndex,
  ...rest
}) => {
  return (
    <textarea
      style={{
        zIndex: zIndex,
        ...style,
      }}
      className={` ${styles.container} ${
        border && styles.border
      } ${className}  ${!notBorderFocus && styles.onFocus} ` }
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
      {...rest}
    />
  );
};
export default TextArea;
