/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import useCategoryYear from "../../../utils/useCategoryYear";

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

  const uniqueYears = new Set(categories.map((item: any) => item.year));
  const yearsArray = Array.from(uniqueYears);
  useEffect(() => {
    setSelectedYear(yearsArray[0]);
  }, [categories]);

  return (
    <ul className={` font-playfair min-h-[100px] flex gap-[2.5vw] flex-col items-start`}>
      {yearsArray.length > 0 &&
        yearsArray.map((year,index) => (
          <li
            key={index}
            className={` ${
              selectedYear === year ? styles.yearsActive : styles.years
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </li>
        ))}
    </ul>
  );
};

export default Year;
