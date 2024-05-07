import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import NavBarFooter from "../../../navbar-footer";
import GlobalInput from "../ui/input-global";
import close from "../../../../static/icons/SVG/close.svg";
import save from "../../../../static/icons/SVG/save.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCreateNote from "../../../utils/useCreateNote";
import { useForm } from "../../../../hooks/useForm";
import useAllCategories from "../../../../hooks/useAllCategories";
import TextArea from "../ui/input-global/textarea";
import CheckIcon from "../../../icons/CheckIcon";
import TextHover from "../ui/input-global/TextHover";
import CrossIcon from "../../../icons/CrossIcon";
import ButtonPrimary from "../ui/button-primary";
import Book from "../../../icons/Book";
import Close from "../../../icons/Close";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Importa el CSS de Quill.js
import "react-quill/dist/quill.bubble.css"; // Opcional: Importa otro tema de Quill.js si lo prefieres

// Importa Quill.js de forma dinámica para evitar problemas con SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
    image2: createNote.id ? createNote.image2 : null,
  };

  const [video, setVideo] = useState(initialValues.video);

  const [initialForm, setInitialForm] = useState(initialValues);

  const { form, handleChange, resetForm } = useForm(initialForm, null);

  const createNewNote = () => {
    form.active = true;
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
    router.push(`/${createNote.category}`);
  };
  const [imageSrc, setImageSrc] = useState<any>("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageSrc(imageDataUrl);
      if (e.target.name.includes("image2")) {
        form.image2 = imageDataUrl;
      } else {
        form.image = imageDataUrl;
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const getVideoId = (url) => {
    const startIndex = url.indexOf("v=") + 2;
    const endIndex = url.indexOf("&");
    form.video = url.substring(
      startIndex,
      endIndex !== -1 ? endIndex : undefined
    );
    return setVideo(
      url.substring(startIndex, endIndex !== -1 ? endIndex : undefined)
    );
  };
  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    setEditorHtml(createNote.comment);

    // Lógica para cargar contenido inicial del editor si es necesario
  }, []);

  const handleEditorChange = (html) => {
    form.comment = html;
    setEditorHtml(html);
  };
  return (
    <NavBarFooter>
      <div className="flex flex-col items-center justify-center w-[55%] h-full mx-auto my-[50px] max-w-[66.5vw] gap-16 ">
        <GlobalInput
          border
          label=" Acá va el título!"
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
          label=" Acá va la bajada de titulo!"
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
              label="Pega el link del video que quieras cargar "
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
        {video.length > 0 && form.video.length > 0 && (
          <div className="relative w-full">
            <Close
              onClick={() => {
                form.video = "";
                setInitialForm({ ...initialForm, video: null });
              }}
              background={"#000"}
              color="#fff"
              size="24px"
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
          <Close
            onClick={() => {
              form.image = "";
              setInitialForm({ ...initialForm, image: null });
            }}
            background={"#000"}
            color="#fff"
            size="24px"
            className="absolute cursor-pointer -right-8 -top-8"
          />
        </div>

        <div
          className="relative rounded-[4px] w-full h"
          style={{ height: "auto" }}
        >
          <ReactQuill
            theme="snow"
            value={editorHtml}
            onChange={handleEditorChange}
          />
        </div>
        <div className="relative w-full ">
          <GlobalInput
            border
            placeholder="Te gustaria cargar una segunda imagen ?"
            style={{ height: "20vw" }}
            type={"file"}
            name={"image2"}
            imageValue={form.image2}
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
            className="absolute cursor-pointer -right-8 -top-8"
          />
        </div>
        {/* <div className="relative flex flex-col justify-between rounded-[4px] w-full">
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
          <Close
            onClick={() => {
              form.comment = "";
              setInitialForm({ ...initialForm, comment: null });
            }}
            background={"#000"}
            color="#fff"
            size="24px"
            className="absolute cursor-pointer -right-8 -top-8"
          />
        </div> */}
        <div className="relative flex justify-start w-full h-auto pr-[80%]">
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
        <div className="  gap-[3.5vw]   flex  items-center justify-center ">
          <button
            disabled={!form.year || !form.title || !form.comment}
            onClick={() => createNewNote()}
            className="relative cursor-pointer"
          >
            <div className="p-[15%]  w-[3vw] h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
              <CheckIcon color="#fff" size="90%" />
            </div>
            <TextHover title="Publicar" />
          </button>
          <button onClick={() => saveNote()} className="relative ">
            <Image
              src={save}
              alt="close"
              width={0}
              height={0}
              className="w-[3vw]"
            />

            <TextHover title="Guardar" />
          </button>

          <button onClick={() => deleteNote()} className="relative ">
            <div className=" p-[15%] w-[3vw] h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
              <CrossIcon color="#fff" size="90%" />
            </div>

            <TextHover title="Eliminar" />
          </button>
          <button onClick={() => saveNote()} className="relative ">
            <div className=" w-[3vw] p-[15%] h-[3vw] bg-black rounded-[100%] flex justify-center items-center">
              <Book size="90%" color="#fff" />
            </div>
            <TextHover title="volver" />
          </button>
        </div>
      </div>
    </NavBarFooter>
  );
};

export default CreateNote;
