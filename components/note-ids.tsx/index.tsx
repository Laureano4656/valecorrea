import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";
import penalImage from "../../static/penal/Manual de marca Valeria Correa.jpg";
import useAllCategories from "../../hooks/useAllCategories";
import useUserLogin from "../utils/useAllCategoriesStore";
import EditIcon from "../icons/EditIcon";
import useCreateNote from "../utils/useCreateNote";
import TextHover from "../home/components/ui/input-global/TextHover";

const NoteId: FunctionComponent = () => {
  const router = useRouter();

  const { allCategories } = useAllCategories();
  const [content, setContent] = useState([]);
  const { setCreateNote } = useCreateNote();
  const { userLogin } = useUserLogin();

  useEffect(() => {
    setContent(
      allCategories.filter((list) => {
        return list.id.toString() === router?.query?.ID;
      })
    );
  }, [allCategories]);

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-between min-h-calcNavFooter gap-14 pt-[5%] ">
        <div className="flex flex-col items-center justify-center w-[55%] h-full mx-auto max-w-[66.5vw] gap-9">
          {content.map((e) => (
            <>
              <h1 className="leading-10 text-center text-gray-600 text-titles font-playfair">
                {e.title}
              </h1>
              <h2 className="text-gray-600 text-subtitles font-playfair">
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
              {e.video.length > 0 && (
                <iframe
                  width="100%"
                  height={500}
                  src={`https://www.youtube.com/embed/${e.video}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}

              {e.comment.split("\n").map((linea, index) => (
                <p
                  key={index}
                  className="text-justify text-black text-text font-playfair"
                >
                  {linea}
                </p>
              ))}
            </>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[3.5vw] pb-8">
          {userLogin && (
            <ButtonBack
              title="Editar"
              onClick={() => {
                setCreateNote({
                  id: content[0].id,
                  year: content[0].year,
                  category: content[0].category,
                  subCategory: content[0].subCategory,
                  image: content[0].image,
                  comment: content[0].comment,
                  title: content[0].title,
                  video: content[0].video,
                });
                router.push("/create");
              }}
            >
              <EditIcon size="24px" color="#fff" />
            </ButtonBack>
          )}
          <ButtonBack onClick={() => router.back()}>
            <Book size={"60%"} color="#fff" />
          </ButtonBack>
        </div>
      </div>
    </NavBarFooter>
  );
};

export default NoteId;
