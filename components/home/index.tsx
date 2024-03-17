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
  const [rotationFavicon, setRotationFavicon] = useState(false);
  const [intervalColor, setIntervalColor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationFavicon(true);

      setTimeout(() => {
        setRotationFavicon(false);
        setIntervalColor(!intervalColor);
      }, 3000); // Duración de la animación en milisegundos
    }, 6000); // Intervalo de 6 segundos
    return () => clearInterval(interval);
  }, [intervalColor]);

  return (
    <div className="flex flex-col justify-between w-full min-h-screen pb-8">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <div className="relative w-[17vw] h-[17vw] mx-auto my-1 flex justify-center items-center">
          <IconMenu
            link={"psicologia"}
            title={"Textos"}
            className="left-[50%]  top-[-30%] translate-x-[-50%]"
          >
            <Book size="60%" strokeMiterlimit={10} />
          </IconMenu>
          <IconMenu
            link={"bienestar"}
            title={"Salud"}
            className="top-[-10%] right-[-15%] "
          >
            <Heart size="60%" />
          </IconMenu>
          <IconMenu
            link={"inspiracion"}
            title={"Bienestar"}
            className="right-[-30%]  top-[50%] translate-y-[-50%]"
          >
            <Inspiration size="60%" />
          </IconMenu>
          <IconMenu
            link={"inspiracion"}
            title={"Fotografia"}
            className="bottom-[-15%] right-[-15%]"
          >
            <Camera size="60%" />
          </IconMenu>
          <IconMenu
            link={"derecho"}
            title={"Video"}
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
            title={"filosofia"}
            className="bottom-[-10%] left-[-10%] "
          >
            <Ligth size="60%" />
          </IconMenu>
          <div
            className={`  ${
              rotationFavicon && styleCarrousel.animationFavicon
            } w-[9vw] mx-auto`}
          >
            <Favicon
              background={intervalColor ? `rgba(139, 69, 19, 1)` : "#000"}
            />
          </div>
        </div>
      </div>
      <div className="fixed z-0 bottom-12 ">
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
