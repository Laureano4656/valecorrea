/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles/years-side-bar.module.css";
import useCategoryYear from "../../../utils/useCategoryYear";
import Close from "../../../icons/Close";
import addIcon from "../../../../static/icons/SVG/add.svg";
import close from "../../../../static/icons/SVG/close.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCreateNote from "../../../utils/useCreateNote";
import useAllCategories from "../../../../hooks/useAllCategories";

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
  const { selectedYear, setSelectedYear } = useCategoryYear();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const { createNote, setCreateNote } = useCreateNote();
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
  const router = useRouter();

  const yearsArray = uniqueYears;

  useEffect(() => {
    setSelectedYear(yearsArray && yearsArray[0]);
  }, [categories]);
  const createNewYear = (year: number) => {
    setCreateNote({
      year: year,
      category: selectedCategory,
    });
    router.push(`/create`);
  };

  return (
    <ul
      className={` font-playfair min-h-[100px] flex gap-[2.5vw] flex-col items-start`}
    >
      {yearList.length > 0 &&
        yearList
          .sort((a, b) => b - a)
          .map((year, index) => (
            <>
              <li
                key={index}
                className={`  ${
                  selectedYear === year ? styles.yearsActive : styles.years
                }`}
                onClick={() => setSelectedYear(year)}
              >
                <p className="relative w-max">
                  {year}
                  <Image
                    src={close}
                    alt="Agregar"
                    className={`absolute w-[2vw] right-[-25%]   top-[-75%] translate-x-1/2 -translate-y-1/2 ${
                      selectedYear === year
                        ? "right-0 translate-y-0 translate-x-0"
                        : "  "
                    }`}
                  />
                </p>
              </li>
            </>
          ))}

      {yearList.length > 0 && (
        <li className="relative flex items-center overflow-hidden cursor-pointer ">
          <input
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
  );
};

export default Year;
