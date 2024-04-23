import React, {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import styles from "./styles/global-input.module.css";
import insert from "../../../../../static/icons/SVG/postImg.svg";
import Image from "next/image";

export interface GlobalInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  labelSize?: string;
  labelColor?: string;
  type?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
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
  iconImage?: any;
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
  iconImage,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      style={{
        zIndex: zIndex,
        ...style,
      }}
      className={`cursor-pointer  relative    ${styles.container} ${
        border && styles.border
      }   ${className} ${focus && !notBorderFocus && styles.onFocus}  `}
      onClick={onClick}
    >
      {label && (
        <p className={"absolute left-0 top-[-50%] text-[12px]"}>{label}</p>
      )}
      {leftIcon && leftIcon}
      {type === "file" && (
        <label
          htmlFor={name}
          className="relative flex flex-col items-center rounded-[4px] justify-center w-full h-full "
        >
          {imageValue && (
            <img
              style={{ width: "100%", height: "100%" }}
              src={imageValue}
              alt="Background"
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
          )}

          {iconImage ? iconImage : <Image src={insert} alt="Insertar" />}
          {placeholder}
        </label>
      )}

      {type !== "textarea" && (
        <input
          className={`font-playfair ${inputClassName} rounded-[4px] ${
            type === "file" ? "-z-50 absolute hidden right-0 top-0" : "flex"
          } `}
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
