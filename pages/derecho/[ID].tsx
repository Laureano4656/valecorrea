import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";
import adComplete from "../../mooks/all-ads.json";
import penalImage from "../../static/penal/Manual de marca Valeria Correa.jpg";
import Image from "next/image";
import useAllCategories from "../../hooks/useAllCategories";

const DerechoId = () => {
  const router = useRouter();

  const { allCategories, setAllCategories } = useAllCategories();
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(
      allCategories.filter((list) => {
        return list.id.toString() === router?.query?.ID;
      })
    );
  }, []);

  const getImage = (value) => {
    return penalImage;
  };

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-between min-h-calcNavFooter gap-14 pt-[5%] ">
        <div className="flex flex-col items-center justify-center w-[55%] h-full mx-auto max-w-3/5 gap-9">
          {content.map((e) => (
            <>
              {e.image.length > 0 && (
                <img
                  style={{ objectFit: "cover", width: "100%", height: "400px" }}
                  src={e.image ?  e.image : getImage(e.image)}
                  alt={"Imagen"}
                />
              )}
              <h1 className="text-[3.4vw] text-gray-600 font-playfair">
                {e.title}
              </h1>

              <p className="text-[1.5vw] text-black font-playfair">
                {e.comment}
              </p>
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
