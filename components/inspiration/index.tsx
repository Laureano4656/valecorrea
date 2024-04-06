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
import { useForm } from "../../hooks/useForm";
import GlobalInput from "../home/components/ui/input-global";
import close from "../../static/icons/SVG/close.svg";
const Inspiration: FunctionComponent = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const initialForm = {
    image: images,
  };

  const { form } = useForm(initialForm, null);
  const { userLogin } = useUserLogin();
  const [imageSrc, setImageSrc] = useState<any>("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageSrc(imageDataUrl);
      form.image = [...form.image, imageDataUrl];
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const deleteImage = (image) => {
    console.log(image);
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

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
        {!userLogin && (
          <GlobalInput
            style={{ height: "20vw", padding: "0" }}
            type="file"
            name={"image"}
            onChange={handleImageChange}
            iconImage={<p className="font-playfair text-[20vw]">+</p>}
          />
        )}

        {form.image.length > 0 &&
          form.image
            .slice()
            .reverse()
            .map((image: string) => (
              <div className={`relative ${styles.item} `}>
                <Image
                  width={0}
                  height={0}
                  className={` ${styles.item} `}
                  src={image}
                  alt={"Icon"}
                />
                <Image
                  onClick={() => deleteImage(image)}
                  src={close}
                  alt="close"
                  className="absolute bg-red-600 cursor-pointer w-7 h-7 right-4 top-2"
                />
              </div>
            ))}
        {/* {images.map((image, index) => (
          <>
            <Image
              key={index}
              src={image}
              className={` ${styles.item} `}
              alt={"Icon"}
            />
          </>
        ))} */}
      </div>
    </div>
  );
};

export default Inspiration;
