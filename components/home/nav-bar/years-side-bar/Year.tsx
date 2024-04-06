/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles/years-side-bar.module.css";
import useCategoryYear from "../../../utils/useCategoryYear";
import addIcon from "../../../../static/icons/SVG/add.svg";
import close from "../../../../static/icons/SVG/close.svg";
import arrow from "../../../../static/icons/SVG/arrow.svg";
import trash from "../../../../static/icons/SVG/trash.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCreateNote from "../../../utils/useCreateNote";
import useAllCategories from "../../../../hooks/useAllCategories";
import useUserLogin from "../../../utils/useAllCategoriesStore";

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
    setSelectedYear(yearsArray && yearsArray[0]);
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
        className={` font-playfair min-h-[100px] flex gap-[2.5vw] flex-col items-start absolute left-0 top-0 `}
      >
        {yearList.length > 0 &&
          yearList
            .sort((a, b) => b - a)
            .map((year, index) => (
              <>
                <li
                  key={index}
                  className={`${
                    selectedYear === year ? styles.yearsActive : styles.years
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  <p className="relative w-max">
                    {year}
                    {userLogin && (
                      <Image
                        onClick={() => {
                          setYearDelete(year);
                          setOpenModal(true);
                        }}
                        src={close}
                        alt="Agregar"
                        className={`absolute w-[2vw] right-[-25%]   top-[-75%] translate-x-1/2 -translate-y-1/2 ${
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
        {userLogin && (
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
        )}
      </ul>
      {openModal && (
        <div
          className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-60"
          onClick={() => setOpenModal(false)}
        >
          <div className="py-[10px] bg-white w-[16vw] h-[25vh] rounded-[32px] flex flex-col justify-between items-center border-stone-950 border-4">
            <p className="text-[1.8vw] font-playfairSemiBold font-semibold">
              atenti!
            </p>
            <p className="text-center font-playfair leading-none  text-[1.1vw]">
              ¿estas segura de que
              <br /> queres borrar <br />
              esta carpeta completa ?
            </p>
            <div className="flex items-center justify-between gap-2 w-[45%] mx-auto ">
              <button
                className="flex flex-col items-center  text-[.7vw] font-playfairSemiBold
                "
                onClick={() => setOpenModal(false)}
              >
                <img src={arrow.src} alt="Flecha" className="w-[2vw]" />
                no,volver
              </button>
              <button
                onClick={() => deleteCategories()}
                className="flex flex-col items-center  text-[.7vw] font-playfairSemiBold
              "
              >
                <img src={trash.src} alt="Flecha" className="w-[2vw]" />
                si, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Year;
