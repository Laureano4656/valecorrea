import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/years-side-bar.module.css";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCategoryYear from "../../../utils/useCategoryYear";
import Image from "next/image";
import addIcon from "../../../../static/icons/SVG/add.svg";
import useCreateNote from "../../../utils/useCreateNote";
interface Props {
  categories: any;
}
const Categories: FunctionComponent<Props> = ({ categories }) => {
  const router = useRouter();
  const [categoriesPerYear, setCategoriesPerYear] = useState([]);

  const { selectedCategory } = useCategoryStore();
  const { selectedYear } = useCategoryYear();

  const [dataCategory, setDataCategory] = useState(0);

  const { setCreateNote } = useCreateNote();

  useEffect(() => {
    const categoryYear = categories.filter((year) => {
      return year.year === selectedYear;
    });
    setCategoriesPerYear(categoryYear);
  }, [selectedYear]);

  const createNewYear = () => {
    setCreateNote({
      year: selectedYear,
      category: router.asPath.replace("/", ""),
      subCategory: selectedCategory,
    });
    router.push(`/create`);
  };

  return (
    <>
      {categoriesPerYear.length > 0 && (
        // aca
        <>
          <ul className="flex flex-col gap-[2vw]">
            <li onClick={() => createNewYear()} className="cursor-pointer">
              <div className="flex justify-start items-center text-start font-playfair gap-2 flex-col  text-[1vw] w-full pl-3 ">
                <Image className="w-[1.7vw] " src={addIcon} alt="Agregar" />
                Agregar nota
              </div>
            </li>
            {categoriesPerYear.map((category) => (
              <li key={category.id}>
                <Link href={`/${router.pathname}/${category.id}`}>
                  <p
                    key={category.title}
                    className={`hover:opacity-100 font-playfairSemiBold ${styles.text}`}
                  >
                    {category.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Categories;
