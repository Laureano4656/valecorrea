import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";
import adComplete from "../../mooks/all-ads.json";
import penalImage from "../../static/penal/Manual de marca Valeria Correa.jpg";
import Image from "next/image";

const DerechoId = () => {
  const router = useRouter();
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(
      adComplete.filter((list) => {
        return list.id.toString() === router?.query?.ID;
      })
    );
  }, []);
  const getImage = (value) => {
    return penalImage;
  };

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-between min-h-calcNavFooter gap-14 pt-14 ">
        <div className="flex flex-col items-center justify-center w-3/6 h-full mx-auto max-w-3/5 gap-9">
          {content.map((e) => (
            <>
              {e.image.length > 0 && (
                <Image
                  style={{ objectFit: "cover", width: "100%", height: "400px" }}
                  src={getImage(e.image)}
                  alt={"Imagen"}
                />
              )}
              <h1 className="text-5xl text-gray-600 font-playfair">
                {e.title}
              </h1>

              <p className="text-xl text-black font-playfair">{e.comment}</p>
            </>
          ))}
        </div>
        <span className="mx-auto pb-11">
          <ButtonBack onClick={() => router.back()}>
            <Book size={"60%"} color="#fff" />
          </ButtonBack>
        </span>
      </div>
    </NavBarFooter>
  );
};

export default DerechoId;
