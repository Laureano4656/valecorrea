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

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Importa el CSS de Quill.js
import "react-quill/dist/quill.bubble.css"; // Opcional: Importa otro tema de Quill.js si lo prefieres
import styles from "./note-id.module.css";
import axios from "axios";
import { BASE_URL } from "../../helpers/env";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const NoteId: FunctionComponent = () => {
  const router = useRouter();

  const { allCategories } = useAllCategories();
  const [content, setContent] = useState({
    title: "",
    subTitle: "",
    image: null,
    image2: null,
    video: "",
    id: null,
    subCategory: "",
    // Si tienes más propiedades como `comment` o cualquier otra, añádelas aquí
    comment: "",
  });
  const { setCreateNote } = useCreateNote();
  const { userLogin } = useUserLogin();

  const [editorHtml, setEditorHtml] = useState();

  // useEffect(() => {
  //   if (content.length > 0) {
  //     setEditorHtml(content[0].comment);
  //   }
  // }, [content]);

  useEffect(() => {
    // setContent(
    //   allCategories.filter((list) => {
    //     return list.id.toString() === router?.query?.ID;
    //   })
    // );
    axios
      .get(`${BASE_URL}/notes/byId/${router?.query?.ID}`)
      .then((response) => {
        setContent(response.data);
        setEditorHtml(response.data.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allCategories, router]);

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-between min-h-calcNavFooter gap-14 sm:pt-[5%] pt-[80px] ">
        <div
          className="flex flex-col items-center justify-center  h-full mx-auto w-11/12
         sm:max-w-[66.5vw] gap-9"
        >
          <>
            <h1 className="leading-10 text-center text-gray-600 text-titles font-playfair">
              {content.title}
            </h1>
            <h2 className="text-gray-600 text-subtitles font-playfair">
              {content.subTitle}
            </h2>
            {content.image && (
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
                src={content.id === 4 ? penalImage.src : content.image}
                alt="Imagen"
              />
            )}
            {content.video && (
              <div className="relative w-full">
                {content.video.includes("youtube.com") ? (
                  <iframe
                    width="100%"
                    height={500}
                    src={`https://www.youtube.com/embed/${
                      content.video.includes("v=")
                        ? content.video.split("v=")[1].split("&")[0]
                        : content.video
                    }`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : content.video.includes("vimeo.com") ? (
                  <iframe
                    className="w-full"
                    src={`https://player.vimeo.com/video/${content.video
                      .split("/")
                      .pop()}`}
                    style={{ width: "100%", aspectRatio: "16 / 9" }}
                    title="vimeo video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : (
                  ""
                )}
              </div>
            )}
            <div className={styles.ReactQuill}>
              <ReactQuill
                readOnly={true}
                theme="snow"
                value={editorHtml}
                modules={{
                  toolbar: false,
                }}
              />
            </div>
            {content.image2 && (
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
                src={content.image2}
                alt="Imagen"
              />
            )}
            {/* {content.comment.split("\n").map((linea, index) => (
    <p key={index} className="text-justify text-black text-text font-playfair">
      {linea}
    </p>
  ))} */}
          </>
        </div>
        <div className="flex items-center justify-center sm:gap-[3.5vw] gap-8 pb-8">
          {userLogin && (
            <ButtonBack
              title="Editar"
              onClick={() => {
                // setCreateNote({
                //   id: content[0].id,
                //   year: content[0].year,
                //   category: content[0].category,
                //   subCategory: content[0].subCategory,
                //   image: content[0].image,
                //   image2: content[0].image2,
                //   comment: content[0].comment,
                //   title: content[0].title,
                //   video: content[0].video,
                // });
                router.push(`/edit/${content.id}`);
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
