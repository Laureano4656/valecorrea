import React, { FunctionComponent } from "react";
import useCreateNote from "../../../../utils/useCreateNote";
import useCategoryYear from "../../../../utils/useCategoryYear";
import { useRouter } from "next/router";
import useCategoryStore from "../../../../utils/useCategoryStore";
import Image from "next/image";
import addIcon from "../../../../../static/icons/SVG/add.svg";

const ButtonAddNote: FunctionComponent = () => {
  const router = useRouter();

  const { selectedCategory } = useCategoryStore();
  const { selectedYear } = useCategoryYear();
  const { setCreateNote } = useCreateNote();

  const createNewYear = () => {
    setCreateNote({
      year: selectedYear,
      category: router.asPath.replace("/", ""),
      subCategory: selectedCategory,
    });
    router.push(`/create/${router.asPath.replace("/", "")}`);
  };
  return (
    <button
      onClick={() => createNewYear()}
      className={`fixed z-10 font-playfair min-h-[100px] sm:max-w-[100px] flex gap-[2.5vw] flex-col items-start sm:absolute sm:right-[-15%] sm:top-[-25px] bottom-0 right-[20%] `}
    >
      <div className="relative sm:w-[200px] w-max ml-[31%] text-xs  flex justify-start items-center text-start font-playfair sm:gap-2 flex-col  md:text-[1vw] pb-6 ">
        <Image className="sm:w-[2vw] w-12" src={addIcon} alt="Agregar" />
        <div className="absolute flex items-center justify-center h-full -translate-x-1/2 -translate-y-1/2 w-max sm:w-full sm:opacity-0 opacity-1 left-1/2 top-1/2 hover:sm:opacity-100 ">
          <p className="pt-10 sm:pt-3">Agregar nota</p>
        </div>
      </div>
    </button>
  );
};

export default ButtonAddNote;
