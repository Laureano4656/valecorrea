import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";
import useAllCategories from "../../hooks/useAllCategories";
import useUserLogin, {
  useUserLoginWithStorage,
} from "../utils/useAllCategoriesStore";
import EditIcon from "../icons/EditIcon";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import styles from "./note-id.module.css";
import axios from "axios";
import { BASE_URL, IMAGE_URL } from "../../helpers/env";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const NoteId: FunctionComponent = () => {
  const router = useRouter();

  const { allCategories } = useAllCategories();
  console.log("allCategories");
  console.log("allCategories");
  console.log("allCategories");
  console.log("allCategories");
  console.log(allCategories);

  const [content, setContent] = useState({
    title: "",
    subTitle: "",
    image: null,
    image2: null,
    video: "",
    id: null,
    subCategory: "",
    comment: "",
  });
  const { userLogin } = useUserLoginWithStorage();

  const [editorHtml, setEditorHtml] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/notes/byId/${router?.query?.ID}`)
      .then((response) => {
        setContent(response.data);
        setEditorHtml(response.data.comment);
      })
      .catch((error) => {});
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
                  height: "50vh",
                  objectFit: "contain",
                  width: "100%",
                }}
                src={`${IMAGE_URL}/${content.image}`}
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
                  height: "50vh",
                  objectFit: "cover",
                  width: "100%",
                }}
                src={`${IMAGE_URL}/${content.image2}`}
                alt="Imagen"
              />
            )}
          </>
        </div>
        <div className="flex items-center justify-center sm:gap-[3.5vw] gap-8 pb-8">
          {userLogin && (
            <ButtonBack
              title="Editar"
              onClick={() => {
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
