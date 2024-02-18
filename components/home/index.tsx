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
      <div className=" mt-36 relative w-[20vw] h-[20vw] mx-auto my-1 flex justify-center items-center">
        <IconMenu
          link={"psicologia"}
          title={"Psicologia"}
          className="left-[50%]  top-[-30%] translate-x-[-50%]"
        >
          <Book size="60%" />
        </IconMenu>
        <IconMenu
          link={"bienestar"}
          title={"Bienestar"}
          className="top-[-10%] right-[-15%] "
        >
          <Heart size="60%" />
        </IconMenu>
        <IconMenu
          link={"inspiracion"}
          title={"Inspiracion"}
          className="right-[-30%]  top-[50%] translate-y-[-50%]"
        >
          <Inspiration size="60%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="bottom-[-15%] right-[-15%]"
        >
          <Camera size="60%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="right-[50%]  bottom-[-30%] translate-x-[50%]"
        >
          <Play size="60%" />
        </IconMenu>
        <IconMenu
          link={"derecho"}
          title={"Derecho"}
          className="top-[-10%] left-[-10%] "
        >
          <Hammer size="60%" />
        </IconMenu>
        <IconMenu
          link={"sobre-mi"}
          title={"Sobre mi"}
          className="left-[-30%]  bottom-[50%] translate-y-[50%] "
        >
          <ValeCorrea size="60%" />
        </IconMenu>
        <IconMenu
          link={"filosofia"}
          title={"Filosofia"}
          className="bottom-[-10%] left-[-10%] "
        >
          <Ligth size="60%" />
        </IconMenu>
        <div className="w-[10vw] mx-auto contenedor">
          <Favicon background="#c16f38" />
        </div>
      </div>

      <Marquee>
        <Image src={bannerImg} alt="banner" className={styleCarrousel.img} />
        <Image src={bannerImg} alt="banner" className={styleCarrousel.img} />
        <Image src={bannerImg} alt="banner" className={styleCarrousel.img} />
        <Image src={bannerImg} alt="banner" className={styleCarrousel.img} />
      </Marquee>
    </div>
  );
};

export default IconsTouch;
