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
      <div className="flex items-start justify-start h-full pb-64 ">
        <div className="grid w-[60%] mx-auto h-screen relative  grid-cols-3 grid-rows-2 gap-1">
          <p className="absolute leading-none -rotate-90 font-playfairBold -translate-x-1/2 -translate-y-1/2 left-[-7%] top-1/4 text-[64px]">
            inspiración
          </p>
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
      <Footer fixed={true} />
    </LayoutHScreen>
  );
};

export default inspiración;
