import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import NavBarFooter from "../../../navbar-footer";
import GlobalInput from "../ui/input-global";
import save from "../../../../static/icons/SVG/save.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCreateNote from "../../../utils/useCreateNote";
import { useForm } from "../../../../hooks/useForm";
import CheckIcon from "../../../icons/CheckIcon";
import TextHover from "../ui/input-global/TextHover";
import CrossIcon from "../../../icons/CrossIcon";
import ButtonPrimary from "../ui/button-primary";
import Book from "../../../icons/Book";
import Close from "../../../icons/Close";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { BASE_URL, IMAGE_URL } from "../../../../helpers/env";
import axios from "axios";
import Modal from "../ui/input-global/modal.tsx/modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditNote: FunctionComponent = () => {
  const router = useRouter();
  const noteId = router.query.ID;
  const { createNote } = useCreateNote();

  const [viewImage1, setViewImage1] = useState({ event: null, upload: null });
  const [viewImage2, setViewImage2] = useState({ event: null, upload: null });
  const [errorModal, setErrorModal] = useState(false);

  const [initialForm, setInitialForm] = useState({
    id: "",
    title: "",
    subTitle: "",
    subCategory: "",
    year: "",
    comment: "",
    category: "",
    active: "",
    video: "",
    image: "",
    image2: "",
  });
  const [loading, setLoading] = useState(true);

  const createNewNote = (saveNote?) => {
    if (form?.year?.length < 1) {
      setErrorModal(true);
      return;
    }
    const formData = new FormData();
    formData.append("title", form.title ? form.title : "");
    formData.append("subTitle", form.subTitle ? form.subTitle : "");
    formData.append("subCategory", initialForm.subCategory);
    formData.append("year", form.year ? form.year.toString() : "");
    formData.append("comment", form.comment ? form.comment : "");
    formData.append("category", form.category ? form.category : "");
    formData.append("image1", viewImage1?.upload ? viewImage1.upload : "");
    formData.append("image2", viewImage2?.upload ? viewImage2.upload : "");
    formData.append("active", saveNote ? "1" : "0");
    formData.append("video", form.video ? form.video : "");

    if (noteId) {
      axios
        .put(`${BASE_URL}/notes/${noteId}`, formData)
        .then((response) => {
          setViewImage1({
            ...viewImage1,
            event: `${IMAGE_URL}/uploads/${response.data.image}`,
            upload: null,
          });
          setViewImage2({
            ...viewImage2,
            event: `${IMAGE_URL}/uploads/${response.data.image2}`,
            upload: null,
          });
          router.back();
        })
        .catch((error) => {});
    } else {
      axios
        .post(`${BASE_URL}/notes`, formData)
        .then((response) => {})
        .catch((error) => {});
    }
  };

  const deleteNote = () => {
    axios
      .delete(`${BASE_URL}/notes/${noteId}`)
      .then((response) => {})
      .catch((error) => {});
  };
  const [imageSrc, setImageSrc] = useState<any>("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string; // Casting result to string
      if (e.target.name === "image2") {
        setViewImage2({ event: result, upload: file });
      } else {
        setViewImage1({ event: result, upload: file });
      }
    };

    reader.readAsDataURL(file);
  };
  const getVideoId = (url) => {
    // Verificar si es un enlace de YouTube
    form.video = url;
  };
  const [editorHtml, setEditorHtml] = useState("");
  const { form, handleChange, resetForm } = useForm(initialForm, null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/notes/byId/${router?.query?.ID}`)
      .then((response) => {
        setInitialForm(response.data);
        resetForm(response.data);
        setViewImage1({
          ...viewImage1,
          event: `${IMAGE_URL}/uploads/${response.data.image}`,
        });
        setViewImage2({
          ...viewImage2,
          event: `${IMAGE_URL}/uploads/${response.data.image2}`,
        });
        setEditorHtml(response.data.comment);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router]);

  const handleEditorChange = (html) => {
    form.comment = html;
    setEditorHtml(html);
  };
  console.log("form.year");
  console.log(form.year);

  return (
    <NavBarFooter>
      {!loading && (
        <div className="flex flex-col items-center justify-center sm:w-[55%] w-11/12 pt-6 sm:pt-0 h-full mx-auto my-[50px] sm:max-w-[66.5vw] gap-16 ">
          <Modal
            openModal={errorModal}
            setOpenModal={() => {
              setErrorModal(false);
            }}
          >
            <p className="font-semibold text-text font-playfairSemiBold">
              atenti!
            </p>
            <p className="leading-none text-center font-playfair text-text ">
              La nota debe tener un año
            </p>
            <button
              className="flex flex-col items-center justify-center p-2 mb-6 text-sm border border-black border-solid rounded-md font-playfairSemiBold "
              onClick={() => setErrorModal(false)}
            >
              Okey
            </button>
          </Modal>
          <GlobalInput
            border
            placeholder=" Acá va el título!"
            inputClassName="text-center w-full text-center"
            style={{
              margin: "0 auto",
              width: "100%",
              lineHeight: "0",
              height: "50%",
              fontSize: "40px",
              padding: "0",
              minHeight: "55px",
            }}
            value={form.title}
            onChange={handleChange}
            type="text"
            name={"title"}
          />
          <GlobalInput
            border
            placeholder=" Acá va la bajada de titulo!"
            inputClassName="text-center w-full text-center"
            style={{
              margin: "0 auto",
              width: "100%",
              lineHeight: "0",
              height: "50%",
              fontSize: "24px",
              padding: "0",
              minHeight: "55px",
            }}
            value={form.subTitle}
            onChange={handleChange}
            type="text"
            name={"subTitle"}
          />

          <div className="flex items-center w-full gap-3 text-center">
            <div className="flex items-center w-full h-auto gap-3">
              <GlobalInput
                style={{
                  width: "100%",
                  minHeight: "55px",
                  padding: 0,
                  paddingLeft: "12px",
                  maxHeight: "50px",
                }}
                border
                inputClassName="w-full"
                placeholder="ingresar  url del video aqui"
                type={"text"}
                name={"video"}
                value={form.video}
                onChange={handleChange}
                className={"w-full h-auto"}
              />
              <ButtonPrimary
                onClick={() => getVideoId(form.video)}
                className="relative flex justify-center w-auto px-4 py-2 mx-auto text-center border-black rounded-lg border-border1"
              >
                <p className="absolute w-10/12 -translate-x-1/2 -translate-y-1/2 bg-white opacity-0 h-10/12 top-1/2 left-1/2 hover:opacity-100">
                  Cargar
                </p>
                <div className="opacity-100 hover:opacity-0">
                  <CheckIcon color="#000" size="30px" />
                </div>
              </ButtonPrimary>
            </div>
          </div>
          {form?.video?.includes("youtube.com") ? (
            <iframe
              width="100%"
              height={500}
              src={`https://www.youtube.com/embed/${
                form.video.includes("v=")
                  ? form.video.split("v=")[1].split("&")[0]
                  : form.video
              }`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : form.video?.includes("vimeo.com") ? (
            <iframe
              src={`https://player.vimeo.com/video/${form.video
                .split("/")
                .pop()}`}
              width="100%"
              height={500}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            " "
          )}
          <div className="relative w-full ">
            <GlobalInput
              border
              placeholder="Insertar"
              style={{ height: "20vw" }}
              type={"file"}
              name={"image"}
              imageValue={viewImage1.event ? viewImage1.event : ""}
              onChange={handleImageChange}
              className={"p-[0!important]"}
            />
            <Close
              onClick={() => {
                form.image = "";
                setInitialForm({ ...initialForm, image: null });
              }}
              background={"#000"}
              color="#fff"
              size="24px"
              className="absolute cursor-pointer sm:-right-8 -right-0 -top-8"
            />
          </div>

          <div
            className="relative rounded-[4px] w-full text-black"
            style={{ height: "auto" }}
          >
            <ReactQuill
              className="custom-quill"
              theme="snow"
              value={editorHtml}
              onChange={handleEditorChange}
            />
          </div>
          <div className="relative w-full ">
            <GlobalInput
              border
              placeholder="Te gustaría  cargar una segunda imagen ?"
              style={{ height: "20vw" }}
              type={"file"}
              name={"image2"}
              imageValue={viewImage2.event ? viewImage2.event : ""}
              onChange={handleImageChange}
              className={"p-[0!important]"}
            />
            <Close
              onClick={() => {
                form.image2 = "";
                setInitialForm({ ...initialForm, image2: null });
              }}
              background={"#000"}
              color="#fff"
              size="24px"
              className="absolute cursor-pointer sm:-right-8 -right-0 -top-8"
            />
          </div>

          <div className="relative flex justify-start w-full h-auto sm:pr-[80%]">
            <GlobalInput
              placeholder="Ingresar año"
              border
              inputClassName="text-center w-full text-center"
              style={{
                margin: "0 auto",
                width: "100%",
                lineHeight: "0",
                height: "50%",
                fontSize: "20px",
                padding: "0",
                minHeight: "55px",
              }}
              value={form.year}
              onChange={handleChange}
              type="number"
              name={"year"}
            />
          </div>
          <div className="  sm:gap-[3.5vw] gap-7   flex  items-center justify-center ">
            <button
              onClick={() => createNewNote(true)}
              className="relative cursor-pointer"
            >
              <div className="p-[15%] w-12 h-12 sm:w-[3vw] sm:h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
                <CheckIcon color="#fff" size="90%" />
              </div>
              <TextHover title="publicar" />
            </button>

            <button onClick={() => createNewNote()} className="relative ">
              <div className="p-[15%] w-12 h-12 sm:w-[3vw] sm:h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
                <Image
                  src={save}
                  alt="close"
                  width={0}
                  height={0}
                  className="sm:w-[3vw] w-12 h-12"
                />
              </div>
              <TextHover title="guardar" />
            </button>
            <button onClick={() => deleteNote()} className="relative ">
              <div className=" p-[15%] w-12 h-12 sm:w-[3vw] sm:h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
                <CrossIcon color="#fff" size="90%" />
              </div>
              <TextHover title="eliminar" />
            </button>
            <button onClick={() => router.back()} className="relative ">
              <div className=" sm:w-[3vw] sm:h-[3vw]  p-[15%] w-12 h-12  bg-black rounded-[100%] flex justify-center items-center">
                <Book size="90%" color="#fff" />
              </div>
              <TextHover title="volver" />
            </button>
          </div>
        </div>
      )}
    </NavBarFooter>
  );
};

export default EditNote;
