/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles/years-side-bar.module.css";
import useCategoryYear from "../../../utils/useCategoryYear";
import addIcon from "../../../../static/icons/SVG/add.svg";
import close from "../../../../static/icons/SVG/close.svg";
import arrow from "../../../../static/icons/SVG/arrow.svg";
import trash from "../../../../static/icons/SVG/trash.svg";
import { useRouter } from "next/router";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCreateNote from "../../../utils/useCreateNote";
import useAllCategories from "../../../../hooks/useAllCategories";
import useUserLogin from "../../../utils/useAllCategoriesStore";
import Modal from "../../components/ui/input-global/modal.tsx/modal";
import Close from "../../../icons/Close";
import Image from "next/image";

interface Category {
  categorie: string;
  comment: string;
  id: number;
  title: string;
  year: number;
}

interface Props {
  categories: Category[];
}

const Year: FunctionComponent<Props> = ({ categories }) => {
  const router = useRouter();
  const { selectedYear, setSelectedYear } = useCategoryYear();
  const { selectedCategory } = useCategoryStore();
  const { userLogin } = useUserLogin();
  const [openModal, setOpenModal] = useState(false);
  const [yearDelete, setYearDelete] = useState(0);
  const { setCreateNote } = useCreateNote();

  const { setAllCategories, allCategories } = useAllCategories();
  const [dataCategory, setDataCategory] = useState(0);

  const categoriesYear = categories.map((e) => {
    return e.year;
  });

  const yearList = [];

  categoriesYear.forEach((elemento) => {
    if (!yearList.includes(elemento)) {
      yearList.push(elemento);
    }
  });

  const uniqueYears = Array.from(categories).findLast((e) => e.year);

  const yearsArray = uniqueYears;

  useEffect(() => {
    setSelectedYear(yearsArray && yearsArray.year);
  }, [categories]);

  const createNewYear = (year: number) => {
    setCreateNote({
      year: year,
      category: router.asPath.replace("/", ""),
      subCategory: selectedCategory,
    });
    router.push(`/create`);
  };

  const deleteCategories = () => {
    const deteleCategory = allCategories.filter((e) => e.year !== yearDelete);

    setAllCategories(deteleCategory);
  };

  return (
    <>
      <ul
        className={`z-10 font-playfair min-h-[100px] max-w-[250px] flex gap-[2.5vw] flex-col items-start absolute sm:left-[-30%] left-[12%] -translate-x-1/2 sm:translate-x-0 sm:top-0 -top-8 `}
      >
        {yearList.length > 0 &&
          yearList
            .sort((a, b) => b - a)
            .map((year, index) => (
              <>
                <li
                  key={index}
                  className={`z-50 ${
                    selectedYear === year ? styles.yearsActive : styles.years
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  <p className="relative w-max ">
                    {year}

                    {userLogin && (
                      <Image
                        onClick={() => {
                          setYearDelete(year);
                          setOpenModal(true);
                        }}
                        src={close}
                        alt="Agregar"
                        className={`${
                          selectedYear === year ? "w-[2vw]" : "w-[1.2vw]"
                        } absolute w-[30px] sm:w-[2vw] right-[-25%]   top-[-75%] translate-x-1/2 -translate-y-1/2 ${
                          selectedYear === year
                            ? "right-0 translate-y-0 translate-x-0"
                            : "  "
                        }`}
                      />
                    )}
                  </p>
                </li>
              </>
            ))}
        {/* {userLogin && (
          <li className="relative flex items-center overflow-hidden cursor-pointer ">
            <input
              min="0"
              type="number"
              placeholder="Año"
              className=" w-full text-[2.2vw] border-border1 border-black focus:border-black focus:border-border1"
              name="year"
              onChange={(e) => setDataCategory(parseInt(e.target.value))}
            />
            <p
              onClick={() => createNewYear(dataCategory)}
              className="flex  text-[1vw] w-full items-center pl-3 text-center"
            >
              <Image className="w-[1.7vw]" src={addIcon} alt="Agregar" />
            </p>
          </li>
        )} */}
      </ul>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <p className="font-semibold text-text font-playfairSemiBold">
          atenti!
        </p>
        <p className="leading-none text-center font-playfair text-text ">
          ¿estas segura de que
          <br /> queres borrar <br />
          esta carpeta completa ?
        </p>
        <div className="flex items-center justify-between gap-2 w-[50%] mx-auto ">
          <button
            className="flex flex-col items-center text-sm font-playfairSemiBold "
            onClick={() => setOpenModal(false)}
          >
            <img src={arrow.src} alt="Flecha" className="w-9" />
            no,volver
          </button>
          <button
            onClick={() => deleteCategories()}
            className="flex flex-col items-center text-sm font-playfairSemiBold "
          >
            <img src={trash.src} alt="Flecha" className="w-9" />
            si, eliminar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Year;
