import Link from "next/link";
import React, { ReactNode } from "react";
export interface iconType {
  title: string;
  children: ReactNode;
  className?: string;
  link: string;
}

export const IconMenu: React.FC<iconType> = ({
  title,
  children,
  className,
  link,
}) => {
  return (
    <Link
      href={link}
      className={`absolute animate-fadeIn  duration-300  w-12 h-12 md:w-[4vw] md:h-[4vw] flex justify-center items-center  rounded-full border-[1px] border-black cursor-pointer  ${className} `}
    >
      <div className=" animate-fadeOut  duration-300  absolute top-[50%]  left-[50%] text-center flex justify-center items-center translate-x-[-50%] translate-y-[-50%] w-[110%] h-[120%] text-black bg-white opacity-0 hover:opacity-100">
        <div className="relative">
          <p className="absolute leading-none bg-white text-black -translate-x-1/2 -translate-y-1/2 text-[1.5vw] left-1/2 top-1/2 font-playfair w-max ">
            {title}
          </p>
        </div>
      </div>
      {children}
    </Link>
  );
};

export default IconMenu;
