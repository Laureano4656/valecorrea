import React from "react";
import NavBar from "../components/home/nav-bar";
import LayoutHScreen from "../components/utils/LayoutHScreen";
import Footer from "../components/footer";
import Image from "next/image";

import sobreMi from "../static/images/foto Sobre Mi.png";

const inspiración = () => {
  const images = [sobreMi, sobreMi, sobreMi, sobreMi, sobreMi];
  return (
    <LayoutHScreen>
      <NavBar />
      <div className="flex items-start justify-start h-full pb-7 ">
        <div className="grid w-[55%] ml-[25%] h-screen relative  grid-cols-3 grid-rows-2 gap-1 ">
          <div className="absolute top-0 left-[-55px] h-[400px] w-[50px] flex justify-center items-start">
            <p className=" leading-none sm:mt-[100px]   2xl:mt-[128px]  -rotate-90 font-playfair   2xl:text-[64px] sm:text-[48px]  ">
              inspiración
            </p>
          </div>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              className={`object-cover h-full col-span-1 ${
                index === 1 ? "row-span-2" : ""
              }`}
              alt={"Icon"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </LayoutHScreen>
  );
};

export default inspiración;
