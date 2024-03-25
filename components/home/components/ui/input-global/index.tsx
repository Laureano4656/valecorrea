import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import styles from "./styles/global-input.module.css";
import insert from "../../../../../static/icons/SVG/postImg.svg";
import Image from "next/image";
import TextArea from "./textarea";

export interface GlobalInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  labelSize?: string;
  labelColor?: string;
  type?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
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

const GlobalInput: FunctionComponent<GlobalInputProps> = ({
  placeholder,
  disabled,
  name,
  type,
  ref,
  readOnly,
  onFocus,
  onBlur,
  onChange,
  onKeyPress,
  onKeyDown,
  onClick,
  autoFocus,
  value,
  leftIcon,
  rightIcon,
  className,
  inputClassName,
  border,
  notBorderFocus,
  label,
  labelSize,
  labelColor,
  children,
  style,
  inputStyle,
  zIndex,
  imageValue,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      style={{
        zIndex: zIndex,
        ...style,
      }}
      className={`cursor-pointer  ${styles.container} ${
        focus && !notBorderFocus && styles.onFocus
      } ${border && styles.border} ${className}`}
      onClick={onClick}
    >
      {label && <p className={styles.label}></p>}
      {leftIcon && leftIcon}
      {type === "file" && (
        <label
          htmlFor={name}
          className="relative flex flex-col items-center justify-center w-full h-full "
        >
          {imageValue && (
            <img
              style={{ width: "100%", height: "100%" }}
              src={imageValue}
              alt="Background"
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
          )}

          <Image src={insert} alt="Insertar" />
          {placeholder}
        </label>
      )}

      {type !== "textarea" && (
        <input
          className={`font-playfair ${inputClassName} ${styles.input}${
            type !== "file" ? "flex" : "-z-50 absolute hidden right-0 top-0"
          }  `}
          readOnly={readOnly}
          ref={ref}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          value={value}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setFocus(e.isTrusted);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setFocus(!e.isTrusted);
          }}
          style={inputStyle}
        />
      )}

      {rightIcon && rightIcon}
      {children && children}
    </div>
  );
};
export default GlobalInput;
