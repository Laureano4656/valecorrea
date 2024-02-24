import React, { useEffect, useState } from "react";
import Favicon from "../icons/Favicon";
import Hammer from "../icons/Hammer";
import Camera from "../icons/Camera";
import Book from "../icons/Book";
import Ligth from "../icons/Ligth";
import Play from "../icons/Play";
import ValeCorrea from "../icons/ValeCorrea";
import Heart from "../icons/Heart";
import IconMenu from "./IconMenu";
import Inspiration from "../icons/Inspiration";
import styleCarrousel from "./home.module.css";
import sobreMi from "../../static/images/foto Sobre Mi.png";
import bannerImg from "../../static/home/banner.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const IconsTouch = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-[90vh]">
      <div className=" mt-36 relative w-[17vw] h-[17vw] mx-auto my-1 flex justify-center items-center">
        <IconMenu
          link={"psicologia"}
          title={"Psicologia"}
          className="left-[50%]  top-[-30%] translate-x-[-50%]"
        >
          <Book size="70%" strokeMiterlimit={10} />
        </IconMenu>
        <IconMenu
          link={"bienestar"}
          title={"Bienestar"}
          className="top-[-10%] right-[-15%] "
        >
          <Heart size="70%" />
        </IconMenu>
        <IconMenu
          link={"inspiracion"}
          title={"Inspiración"}
          className="right-[-30%]  top-[50%] translate-y-[-50%]"
        >
          <Inspiration size="70%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="bottom-[-15%] right-[-15%]"
        >
          <Camera size="70%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="right-[50%]  bottom-[-30%] translate-x-[50%]"
        >
          <Play size="70%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="top-[-10%] left-[-10%] "
        >
          <Hammer size="70%" />
        </IconMenu>
        <IconMenu
          link={"sobre-mi"}
          title={"Sobre mi"}
          className="left-[-30%]  bottom-[50%] translate-y-[50%] "
        >
          <ValeCorrea size="70%" />
        </IconMenu>
        <IconMenu
          link={"filosofia"}
          title={"Filosofia"}
          className="bottom-[-10%] left-[-10%] "
        >
          <Ligth size="70%" />
        </IconMenu>
        <div className="w-[10vw] mx-auto contenedor">
          <Favicon background="#000" />
        </div>
      </div>
      <div className="z-0">
        <Marquee direction="left">
          <div className="flex gap-2 px-1">
            <Image
              src={bannerImg}
              alt="banner"
              className={styleCarrousel.img}
            />
            <Image
              src={bannerImg}
              alt="banner"
              className={styleCarrousel.img}
            />
            <Image
              src={bannerImg}
              alt="banner"
              className={styleCarrousel.img}
            />
            <Image
              src={bannerImg}
              alt="banner"
              className={styleCarrousel.img}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default IconsTouch;
