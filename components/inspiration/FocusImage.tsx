import Image from "next/image";
import React, { FunctionComponent } from "react";

import close from "../../static/icons/SVG/close.svg";
import Arrow from "../icons/Arrow";
import Close from "../icons/Close";
interface Props {
  src: string | undefined | null | any;
  handleLeft?: () => void;
  handleRigth?: () => void;
  closeFocus: () => void;
}
const FocusImage: FunctionComponent<Props> = ({
  src,
  handleRigth,
  handleLeft,
  closeFocus,
}) => {
  return (
    <div
      onClick={closeFocus}
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-60"
    >
      <div className="sm:w-2/6 z-40 w-11/12 h-[95%] relative  ">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLeft();
          }}
          className="absolute  flex items-center justify-center  p-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-0 sm:-left-[90%] top-1/2"
        >
          <Arrow size="16px" className="z-50 transform -rotate-90 " />
        </button>
        <Close
          color="#fff"
          background="#000"
          onClick={closeFocus}
          className="absolute cursor-pointer object  z-50 -cover w-6 h-6 right-[5%] sm:-right-[15%] sm:top-[0] top-[5%]"
        />

        <Image
          src={src && src}
          alt="Image"
          width={0}
          height={0}
          className="z-10 object-cover w-full h-full"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRigth();
          }}
          className="absolute  flex items-center justify-center z-50  p-2 sm:-translate-x-1/2 -translate-y-1/2 bg-white rounded-full right-0 sm:right-[-90%] top-1/2"
        >
          <Arrow size="16px" className="z-50 transform rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default FocusImage;
