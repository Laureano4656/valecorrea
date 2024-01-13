import React from "react";
import NavBar from "../components/home/nav-bar";
import LayoutHScreen from "../components/utils/LayoutHScreen";
import Footer from "../components/footer";
import Image from "next/image";

import sobreMi from "../static/images/Foto Sobre Mi.png";

const inspiración = () => {
  const images = [sobreMi, sobreMi, sobreMi, sobreMi, sobreMi];
  return (
    <LayoutHScreen>
      <NavBar />
      <div className="flex items-start justify-start h-full pb-64 ">
        <div className="relative w-[20%] h-screen">
          <p className="absolute leading-none -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4 text-[64px]">
            Inspiracion
          </p>
        </div>
        <div className="grid w-[80%] h-screen  grid-cols-3 grid-rows-2 gap-2">
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
      {/* <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-blue-600 "></div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-yellow-200 "></div>
          <div className="col-span-1 row-span-3 bg-red-700 "></div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-blue-600 "></div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-yellow-200 "></div> */}
      <Footer fixed={true} />
    </LayoutHScreen>
  );
};

export default inspiración;
