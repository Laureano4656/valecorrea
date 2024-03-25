import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import styles from "./styles/global-input.module.css";
import insert from "../../../../../static/icons/SVG/postImg.svg";
import Image from "next/image";

export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  // placeholder?: string;
  // value?: string;
  // readOnly?: boolean;
  // autoFocus?: boolean;
  // onFocus?: React.FocusEventHandler<HTMLInputElement>;
  // onBlur?: React.FocusEventHandler<HTMLInputElement>;
  // onChange?: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>;
  // onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  // onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  // onClick?: () => void;
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
        focus && !notBorderFocus && styles.onFocus
      } ${border && styles.border} ${className}`}
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
