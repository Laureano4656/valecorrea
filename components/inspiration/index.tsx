import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles/inspiration.module.css";
import Image from "next/image";
import image1 from "../../static/inspiration/1.webp";
import image2 from "../../static/inspiration/2.webp";
import image3 from "../../static/inspiration/3.webp";
import image4 from "../../static/inspiration/4.webp";
import image5 from "../../static/inspiration/5.webp";
import image6 from "../../static/inspiration/6.webp";
import image7 from "../../static/inspiration/7.webp";
import useUserLogin from "../utils/useAllCategoriesStore";
import GlobalInput from "../home/components/ui/input-global";
import iconAdd from "../../static/icons/SVG/+.svg";
import FocusImage from "./FocusImage";
import CrossIcon from "../icons/CrossIcon";
import Close from "../icons/Close";
const Inspiration: FunctionComponent = () => {
  let images = [
    { image: image1, id: 0 },
    { image: image7, id: 1 },
    { image: image4, id: 2 },
    { image: image6, id: 3 },
    { image: image5, id: 4 },
    { image: image3, id: 5 },
    { image: image2, id: 6 },
  ];

  const { userLogin } = useUserLogin();
  const [imageSrc, setImageSrc] = useState<any>(images);
  const [isHovered, setIsHovered] = useState(false);
  const [focusImage, setFocusImage] = useState<any>(null);

  const handleNewImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      if (imageSrc.length) {
        setImageSrc([
          ...imageSrc,
          { image: imageDataUrl, id: imageSrc.length },
        ]);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (id) => {
    const probar = imageSrc.filter((img) => {
      return img.id !== id;
    });
    setImageSrc(probar);
  };

  const handleRigth = (id: number) => {
    if (id > 0) {
      const previousImage = imageSrc.filter((valueId) => {
        return valueId.id === id - 1;
      });

      setFocusImage({
        image: previousImage[0].image,
        id: previousImage[0].id,
      });
    }
  };

  const handleLeft = (id) => {
    if (id < imageSrc.length - 1) {
      const previousImage = imageSrc.filter((valueId) => {
        return valueId.id === id + 1;
      });

      setFocusImage({
        image: previousImage[0].image,
        id: previousImage[0].id,
      });
    }
  };

  return (
    <div className="flex items-start justify-start h-full pb-7 pt-[50px]">
      <div className={`${styles.container}   gap-2 sm:gap-0 relative `}>
        <div className="absolute top-[10%]  left-[-12%] h-[400px] w-[50px] flex justify-center items-start">
          <div className="relative">
            <p className=" leading-none sm:mt-[100px] absolute left-1/2 bottom-[-9vw] -translate-x-1/2    2xl:mt-[128px]  -rotate-90 font-playfair   text-[5.1vw]   ">
              inspiración
            </p>
          </div>
        </div>
        {userLogin && (
          <GlobalInput
            style={{
              height: "auto",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="file"
            name={"image"}
            onChange={(e) => handleNewImage(e)}
            iconImage={
              // <img src={`${iconAdd}`} alt="Agregar" />
              <Image src={iconAdd} height={0} width={0} className="w-[40%]" alt="Agregar" />
              // <p className="leading-none font-playfair text-[150px]">+</p>
            }
          />
        )}
        {imageSrc.length > 0 &&
          imageSrc
            .slice()
            .reverse()
            .map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer ${styles.item} `}
              >
                <div className="relative w-full h-full">
                  <Image
                    width={0}
                    height={0}
                    className={`  hover:brightness-75 transition duration-300 ease-in-out ${styles.item} `}
                    src={image.image}
                    alt={"Icon"}
                  />
                  {userLogin && (
                    <>
                      <div
                        onClick={() => {
                          setFocusImage({ image: image.image, id: image.id });
                        }}
                        className="absolute top-0 right-0 w-full h-full opacity-0 hover:opacity-100 pl-[80%] pb-[80%]"
                      >
                        <Close
                          color="#fff"
                          background="#000"
                          onClick={() => deleteImage(image.id)}
                          className="relative right-0 flex w-7 h-7 top-2"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}

        {focusImage !== null && (
          <FocusImage
            handleLeft={() => handleLeft(focusImage.id)}
            handleRigth={() => handleRigth(focusImage.id)}
            src={focusImage.image}
            closeFocus={() => setFocusImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Inspiration;
