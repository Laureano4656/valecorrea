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
import listOfBanner from "./listOfBanner.json";
import TextCarousel from "./components/TextCarousel";
import Inspiration from "../icons/Inspiration";
import styleCarrousel from "./home.module.css";
import sobreMi from "../../static/images/foto Sobre Mi.png";
import bannerImg from "../../static/home/banner.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const sobremi = sobreMi;

const IconsTouch = () => {
  const texts = [
    "contextogrande",
    "Texto",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
    "contextogrande",
    "Texto 3",
  ];
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % 3) + 1);
    }, 10000); // Cambia este valor según la duración de la animación
    return () => clearInterval(interval);
  }, []);
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

      {/* <div className={styleCarrousel.scrollingContainer}>
        <div className={styleCarrousel.scrollingContent}>
          {listOfBanner.map((e) => (
            <p style={{ padding: "4px", display: "inline-block" }}>{e}</p>
          ))}
        </div>
      </div> */}
      {/* <section id={styleCarrousel.marquee}>
        <div className={styleCarrousel.container}>
          {listOfBanner.map((e, index) => (
            <div className={styleCarrousel["pic-container"]} key={index}>
              <div className={styleCarrousel.pic}>
                <Image
                  src={bannerImg}
                  alt={`img ${index + 1}`}
                  className={styleCarrousel.img}
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}
      {/* <div className={styleCarrousel.sliderContainer}>
        <div className={styleCarrousel.slider}>
          <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
        </div>
        <div className={styleCarrousel.slider2}>
          <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
        </div>
        <div className={styleCarrousel.slider3}>
          <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
        </div>
      </div> */}

      <Marquee>
        <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
        <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
        <Image src={bannerImg} alt="sobremi" className={styleCarrousel.img} />
      </Marquee>
      {/* <TextCarousel texts={listOfBanner} /> */}
    </div>
  );
};

export default IconsTouch;
