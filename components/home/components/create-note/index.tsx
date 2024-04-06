import React, { useEffect, useState } from "react";
import NavBarFooter from "../../../navbar-footer";
import GlobalInput from "../ui/input-global";
import close from "../../../../static/icons/SVG/close.svg";
import trash from "../../../../static/icons/SVG/trash.svg";
import save from "../../../../static/icons/SVG/save.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCreateNote from "../../../utils/useCreateNote";
// import allCategories from "../../../../mooks/all-ads.json";
import { useForm } from "../../../../hooks/useForm";
import useAllCategories from "../../../../hooks/useAllCategories";
import TextArea from "../ui/input-global/textarea";
const CreateNote = () => {
  const router = useRouter();
  const { createNote } = useCreateNote();
  const { allCategories, setAllCategories } = useAllCategories();
  const initialValues = {
    id: new Date().getTime(),
    image: null,
    title: "",
    subTitle: "",
    subCategory: createNote.subCategory,
    year: createNote.year,
    comment: "",
    category: createNote.category,
  };

  const [initialForm, setInitialForm] = useState(initialValues);

  const { form, handleChange, resetForm } = useForm(initialForm, null);

  const createNewNote = () => {
    setAllCategories([...allCategories, form]);
    router.push(`/${createNote.category}`);
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
  console.log(form);

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-start w-[60.2vw] mx-auto gap-[1vw] h-full mb-8">
        <div className="relative h-auto border-black border-border1 ">
          <GlobalInput
            inputClassName="text-center w-full text-center"
            placeholder="título"
            style={{
              margin: "0 auto",
              width: "100%",
              lineHeight: "0",
              height: "50%",
              fontSize: "6vw",
              padding: "0",
            }}
            value={form.title}
            onChange={handleChange}
            type="text"
            name={"title"}
          />
          <Image
            onClick={() => {
              form.title = "";
              setInitialForm({ ...initialForm, title: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer right-4 top-2"
          />
        </div>
        <div className="relative h-auto border-black border-border1 ">
          <GlobalInput
            inputClassName="text-center w-full text-center"
            placeholder="Bajada"
            style={{
              margin: "0 auto",
              width: "100%",
              lineHeight: "0",
              height: "50%",
              fontSize: "6vw",
              padding: "0",
            }}
            value={form.subTitle}
            onChange={handleChange}
            type="text"
            name={"subTitle"}
          />
          <Image
            onClick={() => {
              form.subTitle = "";
              setInitialForm({ ...initialForm, subTitle: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer right-4 top-2"
          />
        </div>
        <div className="relative border-black border-border1 ">
          <GlobalInput
            placeholder="Insertar"
            style={{ height: "20vw" }}
            type="file"
            name={"image"}
            imageValue={form.image}
            onChange={handleImageChange}
          />
          <Image
            onClick={() => {
              form.image = "";
              setInitialForm({ ...initialForm, image: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer right-4 top-2"
          />
        </div>

        <div className="relative flex flex-col justify-between border-black border-border1">
          <TextArea
            inputClassName="resize-none"
            placeholder="Escribi tu texto aca"
            style={{ height: "29vw", fontSize: "1.5vw" }}
            name={"comment"}
            value={form.comment}
            notBorderFocus
            onChange={handleChange}
          />

          <div className=" py-6  flex gap-[3.5vw] items-center justify-center ">
            <button
              disabled={!form.title || !form.comment}
              onClick={() => createNewNote()}
              className="text-[1vw] flex flex-col items-center justify-center cursor-pointer right-4 top-2"
            >
              <Image
                src={save}
                alt="close"
                width={0}
                height={0}
                className="w-[3vw]"
              />
              guardar
            </button>
            <button
              onClick={() => resetForm()}
              className="text-[1vw] flex flex-col items-center justify-center cursor-pointer right-4 top-2"
            >
              <Image
                src={trash}
                alt="close"
                width={0}
                height={0}
                className="w-[3vw]"
              />
              eliminar
            </button>
          </div>
          <Image
            onClick={() => {
              form.comment = "";
              setInitialForm({ ...initialForm, comment: null });
            }}
            src={close}
            alt="close"
            className="absolute cursor-pointer right-4 top-2"
          />
        </div>
      </div>
    </NavBarFooter>
  );
};

export default CreateNote;
