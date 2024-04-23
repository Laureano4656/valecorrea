import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import NavBarFooter from "../../../navbar-footer";
import GlobalInput from "../ui/input-global";
import close from "../../../../static/icons/SVG/close.svg";
import trash from "../../../../static/icons/SVG/trash.svg";
import save from "../../../../static/icons/SVG/save.svg";
import check from "../../../../static/icons/SVG/check.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCreateNote from "../../../utils/useCreateNote";
// import allCategories from "../../../../mooks/all-ads.json";
import { useForm } from "../../../../hooks/useForm";
import useAllCategories from "../../../../hooks/useAllCategories";
import TextArea from "../ui/input-global/textarea";
import CheckIcon from "../../../icons/CheckIcon";
import TextHover from "../ui/input-global/TextHover";
import CrossIcon from "../../../icons/CrossIcon";
import ButtonPrimary from "../ui/button-primary";

const CreateNote: FunctionComponent = () => {
  const router = useRouter();
  const { createNote } = useCreateNote();
  const { allCategories, setAllCategories } = useAllCategories();

  const initialValues = {
    id: createNote.id ? createNote.id : new Date().getTime(),
    image: createNote.id ? createNote.image : null,
    title: createNote.id ? createNote.title : "",
    subTitle: createNote.id ? createNote.subTitle : "",
    subCategory: createNote.id
      ? createNote.subCategory
      : createNote.subCategory,
    year: createNote.id ? createNote.year : null,
    comment: createNote.id ? createNote.comment : "",
    category: createNote.id ? createNote.category : createNote.category,
    active: createNote.id ? createNote.active : true,
    video: createNote.id ? createNote.video : "",
  };

  const [video, setVideo] = useState(initialValues.video);

  const [initialForm, setInitialForm] = useState(initialValues);

  const { form, handleChange, resetForm } = useForm(initialForm, null);

  const createNewNote = () => {
    if (createNote.id) {
      const removeOldNote = allCategories.filter((note) => {
        return note.id !== createNote.id;
      });

      setAllCategories([...removeOldNote, form]);
    } else {
      setAllCategories([...allCategories, form]);
    }

    router.push(`/${createNote.category}`);
  };
  const saveNote = () => {
    const saveNote = allCategories.filter((note) => {
      return note.id === createNote.id;
    });
    const removeOldNote = allCategories.filter((oldNote) => {
      return oldNote.id !== createNote.id;
    });
    saveNote[0].active = false;

    setAllCategories([...removeOldNote, saveNote[0]]);
    router.push(`/${createNote.category}`);
  };

  const deleteNote = () => {
    const deleteNote = allCategories.filter((note) => {
      return note.id !== createNote.id;
    });

    setAllCategories([...deleteNote]);
  };
  const [imageSrc, setImageSrc] = useState<any>("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageSrc(imageDataUrl);
      form.image = imageDataUrl;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const getVideoId = (url) => {
    const startIndex = url.indexOf("v=") + 2;
    const endIndex = url.indexOf("&");
    return setVideo(
      url.substring(startIndex, endIndex !== -1 ? endIndex : undefined)
    );
  };

  return (
    <NavBarFooter>
      <div className="flex flex-col items-center justify-center w-[55%] h-full mx-auto my-[50px] max-w-[66.5vw] gap-16 ">
        <GlobalInput
          border
          label="Deseas ingresar un titulo?"
          inputClassName="text-center w-full text-center"
          style={{
            margin: "0 auto",
            width: "100%",
            lineHeight: "0",
            height: "50%",
            fontSize: "40px",
            padding: "0",
          }}
          value={form.title}
          onChange={handleChange}
          type="text"
          name={"title"}
        />
        <GlobalInput
          border
          label="Deseas ingresar bajada de titulo?"
          inputClassName="text-center w-full text-center"
          style={{
            margin: "0 auto",
            width: "100%",
            lineHeight: "0",
            height: "50%",
            fontSize: "24px",
            padding: "0",
          }}
          value={form.subTitle}
          onChange={handleChange}
          type="text"
          name={"subTitle"}
        />

        <div className="flex items-center w-full h-10 gap-3 text-center">
          <div className="flex items-center w-full gap-3">
            <GlobalInput
              label=" Deseas insertar un video ?"
              style={{ width: "100%" }}
              border
              inputClassName="w-full"
              placeholder="ingresar  url del video aqui"
              type={"text"}
              name={"video"}
              value={form.video}
              onChange={handleChange}
              className={"w-full"}
            />
            <ButtonPrimary
              onClick={() => getVideoId(form.video)}
              className="flex justify-center w-auto px-4 py-2 mx-auto text-center border-black rounded-lg border-border1"
            >
              Cargar
            </ButtonPrimary>
          </div>
        </div>
        {video.length > 0 && form.video.length > 0 && (
          <div className="relative w-full">
            <Image
              onClick={() => {
                form.video = "";
                setInitialForm({ ...initialForm, video: null });
              }}
              src={close}
              alt="close"
              className="absolute cursor-pointer -right-8 -top-8"
            />
            <iframe
              width="100%"
              height={500}
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        )}
        <div className="relative w-full ">
          <GlobalInput
            border
            placeholder="Insertar"
            style={{ height: "20vw" }}
            type={"file"}
            name={"image"}
            imageValue={form.image}
            onChange={handleImageChange}
            className={"p-[0!important]"}
          />
          <Image
            onClick={() => {
              form.image = "";
              setInitialForm({ ...initialForm, image: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer -right-8 -top-8"
          />
        </div>

        <div className="relative flex flex-col justify-between rounded-[4px] w-full">
          <TextArea
            border
            label={"Escribi tu texto aca"}
            inputClassName="resize-none "
            placeholder=""
            style={{
              height: "29vw",
              fontSize: "20px",
              textAlign: "justify",
            }}
            name={"comment"}
            value={form.comment}
            notBorderFocus
            onChange={handleChange}
            className={"p-[0!important]"}
          />

          <Image
            onClick={() => {
              form.comment = "";
              setInitialForm({ ...initialForm, comment: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer -right-8 -top-4"
          />
        </div>
        <div className="relative flex mx-auto  h-auto w-[20vw]">
          <GlobalInput
            label="Ingresar año"
            border
            inputClassName="text-center w-full text-center"
            style={{
              margin: "0 auto",
              width: "100%",
              lineHeight: "0",
              height: "50%",
              fontSize: "20px",
              padding: "0",
            }}
            value={form.year}
            onChange={handleChange}
            type="number"
            name={"year"}
          />
        </div>
        <div className=" py-6 gap-[3.5vw] w-[20vw]  flex  items-center justify-center ">
          <button
            disabled={!form.year || !form.title || !form.comment}
            onClick={() => createNewNote()}
            className="text-[1vw] relative flex flex-col items-center justify-center cursor-pointer right-4 top-2"
          >
            <div className="p-[15%] w-[3vw] h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
              <CheckIcon color="#fff" size="90%" />
            </div>
            <TextHover title="Publicar" />
          </button>
          <button
            onClick={() => saveNote()}
            className="text-[1vw]  relative flex flex-col items-center justify-center cursor-pointer right-4 top-2"
          >
            <Image
              src={save}
              alt="close"
              width={0}
              height={0}
              className="w-[3vw]"
            />

            <TextHover title="Guardar" />
          </button>
          <button
            onClick={() => deleteNote()}
            className="text-[1vw]  relative flex flex-col items-center justify-center cursor-pointer right-4 top-2"
          >
            <div className="p-[15%] w-[3vw] h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
              <CrossIcon color="#fff" size="90%" />
            </div>

            <TextHover title="Eliminar" />
          </button>
        </div>
      </div>
    </NavBarFooter>
  );
};

export default CreateNote;
