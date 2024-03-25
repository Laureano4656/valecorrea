import React, { useState } from "react";
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
  const { createNote, setCreateNote } = useCreateNote();
  const { allCategories, setAllCategories } = useAllCategories();

  const initialForm = {
    id: new Date().getTime(),
    image: "",
    title: "",
    subCategory: createNote.category,
    year: createNote.year,
    comment: "",
  };

  const [newNote, setNewNote] = useState([]);

  const { form, handleChange, resetForm } = useForm(initialForm, null);
  const handleChangeTest = (e) => {
    console.log(e.target.value);
  };
  const createNewNote = () => {
    setAllCategories([...allCategories, form]);
    // router.push(`/${createNote.category}`);
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
  console.log("allCategories");
  console.log(allCategories);

  return (
    <NavBarFooter>
      <div className="flex flex-col justify-start w-[60.2vw] mx-auto gap-[1vw] h-full mb-8">
        <div className="relative border-black border-border1 ">
          <GlobalInput
            placeholder="Insertar"
            style={{ height: "20vw" }}
            type="file"
            name={"image"}
            imageValue={form.image}
            onChange={handleImageChange}
          />
          <Image src={close} alt="close" className="absolute right-4 top-2" />
        </div>
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
        </div>
        <div className="relative flex flex-col justify-between border-black border-border1">
          <TextArea
            inputClassName="resize-none"
            placeholder="Escribi tu texto aca"
            style={{ height: "29vw", fontSize: "1.5vw" }}
            name={"comment"}
            value={form.comment}
            onChange={handleChange}
          />

          <div className=" py-6  flex gap-[3.5vw] items-center justify-center ">
            <Image
              onClick={() => createNewNote()}
              src={save}
              alt="close"
              className="cursor-pointer w-[3.5vw] right-4 top-2"
            />
            <Image
              src={trash}
              alt="close"
              className="cursor-pointer w-[3.5vw] right-4 top-2"
            />
          </div>
        </div>
      </div>
    </NavBarFooter>
  );
};

export default CreateNote;
