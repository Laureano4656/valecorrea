import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles/inspiration.module.css";
import Image from "next/image";
import { useUserLoginWithStorage } from "../utils/useAllCategoriesStore";
import GlobalInput from "../home/components/ui/input-global";
import iconAdd from "../../static/icons/SVG/+.svg";
import FocusImage from "./FocusImage";
import Close from "../icons/Close";
import Modal from "../home/components/ui/input-global/modal.tsx/modal";
import arrow from "../../static/icons/SVG/arrow.svg";
import trash from "../../static/icons/SVG/trash.svg";
import useIsMobile from "../utils/isMobile";
import axios from "axios";
import { BASE_URL } from "../../helpers/env";

const Inspiration: FunctionComponent = () => {
  const { userLogin } = useUserLoginWithStorage();
  const isMobile = useIsMobile();
  const [imageSrc, setImageSrc] = useState<any>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [focusImage, setFocusImage] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/personal-images`)
      .then((response) => {
        setImageSrc(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const handleNewImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${BASE_URL}/personal-images/upload`, formData)
      .then((response) => {
        setImageSrc((prevImages) => [
          ...prevImages,
          { fileName: response.data.fileName, id: response.data.id },
        ]);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const deleteImage = (id) => {
    axios
      .delete(`${BASE_URL}/personal-images/${id}`)
      .then(() => {
        setImageSrc((prevImages) => prevImages.filter((img) => img.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  const handleRight = (id: number) => {
    if (id > 0) {
      const previousImage = imageSrc.find((img) => img.id === id - 1);
      if (previousImage) {
        setFocusImage({
          image: previousImage.image,
          id: previousImage.id,
        });
      }
    }
  };

  const handleLeft = (id) => {
    if (id < imageSrc.length - 1) {
      const nextImage = imageSrc.find((img) => img.id === id + 1);
      if (nextImage) {
        setFocusImage({
          image: nextImage.image,
          id: nextImage.id,
        });
      }
    }
  };

  return (
    <div className="flex items-start justify-start  pb-7 pt-[50px] min-h-screen">
      <div className={`${styles.container}   gap-2 sm:gap-0 relative `}>
        <div
          className={`${
            isMobile
              ? "relative flex items-center justify-center w-full col-start-1 col-end-3"
              : "absolute w-[50px]  left-[-12%] top-[10%] h-[400px]"
          }    flex justify-center items-start`}
        >
          <div className="relative">
            <p
              className={`${
                isMobile
                  ? "relative"
                  : "-rotate-90 -translate-x-1/2 bottom-[-9vw] absolute left-1/2 sm:mt-[100px] 2xl:mt-[128px]   "
              }leading-none font-playfair text-[5.1vw]`}
            >
              inspiración
            </p>
          </div>
        </div>
        {/* {!userLogin && (
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
              <Image
                src={iconAdd}
                height={0}
                width={0}
                className="w-[40%]"
                alt="Agregar"
              />
              // <p className="leading-none font-playfair text-[150px]">+</p>
            }
          />
        )} */}
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
              <Image
                src={iconAdd}
                height={0}
                width={0}
                className="w-[40%]"
                alt="Agregar"
              />
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
                <div
                  className="relative w-full h-full"
                  onClick={() => {
                    setFocusImage({ image: `${BASE_URL}/${image.fileName}` });
                  }}
                >
                  <img
                    width={500}
                    height={500}
                    className={`hover:brightness-75  transition duration-300 ease-in-out ${styles.item} w-full`}
                    alt={"Icon"}
                    src={`${BASE_URL}/${image.fileName}`}
                  />

                  {userLogin && (
                    <>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenModal(image.id);
                        }}
                        className="absolute top-0 right-0 w-[30px]  h-[30px] sm:opacity-1 hover:opacity-100  "
                      >
                        <Close
                          color="#fff"
                          background="#000"
                          className="relative right-0 flex w-4 h-4 sm:w-7 sm:h-7 top-2"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}

        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <p className="font-semibold text-text font-playfairSemiBold">
            atenti!
          </p>
          <p className="leading-none text-center font-playfair text-text ">
            ¿estás segura de que
            <br /> querés borrar <br />
            está imagen ?
          </p>
          <div className="flex items-center justify-between gap-2 w-[50%] mx-auto ">
            <button
              className="flex flex-col items-center text-sm font-playfairSemiBold "
              onClick={() => setOpenModal(false)}
            >
              <img src={arrow.src} alt="Flecha" className="w-9" />
              no,volver
            </button>
            <button
              onClick={() => {
                deleteImage(openModal);
                setOpenModal(false);
              }}
              className="flex flex-col items-center text-sm font-playfairSemiBold "
            >
              <img src={trash.src} alt="Flecha" className="w-9" />
              si, eliminar
            </button>
          </div>
        </Modal>
        {focusImage !== null && (
          <FocusImage
            handleLeft={() => handleLeft(focusImage.id)}
            handleRigth={() => handleRight(focusImage.id)}
            src={focusImage.image}
            closeFocus={() => setFocusImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Inspiration;
