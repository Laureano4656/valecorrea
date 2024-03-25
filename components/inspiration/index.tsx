import React, { FunctionComponent } from "react";
import styles from "./styles/inspiration.module.css";
import Image from "next/image";
import sobreMi from "../../static/images/foto Sobre Mi.png";

const Inspiration: FunctionComponent = () => {
  const images = [
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
    sobreMi,
  ];

  const randomImg = Math.random();
  return (
    <div className="flex items-start justify-start h-full pb-7 ">
      <div className={`${styles.container}    relative `}>
        <div className="absolute top-[10%]  left-[-12%] h-[400px] w-[50px] flex justify-center items-start">
          <div className="relative">
            <p className=" leading-none sm:mt-[100px] absolute left-1/2 bottom-[-9vw] -translate-x-1/2    2xl:mt-[128px]  -rotate-90 font-playfair   text-[5.1vw]   ">
              inspiración
            </p>
          </div>
        </div>
        {images.map((image, index) => (
          <>
            <Image
              key={index}
              src={image}
              //   ${
              //     index === 1 ? "row-span-2 h-full" : "h-[54vw/3]"
              //   }
              // object-cover  col-span-1
              className={` ${styles.item} `}
              alt={"Icon"}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
