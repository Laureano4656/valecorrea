import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";
import penalImage from "../../static/penal/Manual de marca Valeria Correa.jpg";
import useAllCategories from "../../hooks/useAllCategories";

const NoteId: FunctionComponent = () => {
  const router = useRouter();

  const { allCategories } = useAllCategories();
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(
      allCategories.filter((list) => {
        return list.id.toString() === router?.query?.ID;
      })
    );
  }, [allCategories]);

  const getImage = () => {
    return penalImage;
  };

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-between min-h-calcNavFooter gap-14 pt-[5%] ">
        <div className="flex flex-col items-center justify-center w-[55%] h-full mx-auto max-w-3/5 gap-9">
          {content.map((e) => (
            <>
              <h1 className="md:text-[3.4vw] md:leading-[3.5vw] leading-10  text-[40px] text-gray-600 font-playfair">
                {e.title}
              </h1>
              <h2 className="md:text-[1.8vw] text-[23px] text-gray-600 font-playfair">
                {e?.subTitle}
              </h2>
              {e.image && (
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                  src={e.id === 4 ? penalImage.src : e.image}
                  alt={"Imagen"}
                />
              )}

              <p className="md:text-[1.5vw] text-[19px] text-black font-playfair">
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

export default NoteId;
