import React, { FunctionComponent } from "react";
import styles from "./styles/inspiration.module.css";
import Image from "next/image";
import image1 from "../../static/inspiration/1.webp";
import image2 from "../../static/inspiration/2.webp";
import image3 from "../../static/inspiration/3.webp";
import image4 from "../../static/inspiration/4.webp";
import image5 from "../../static/inspiration/5.webp";
import image6 from "../../static/inspiration/6.webp";
import image7 from "../../static/inspiration/7.webp";

const Inspiration: FunctionComponent = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

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
