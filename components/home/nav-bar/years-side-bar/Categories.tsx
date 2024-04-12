import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/years-side-bar.module.css";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCategoryYear from "../../../utils/useCategoryYear";
import Image from "next/image";
import addIcon from "../../../../static/icons/SVG/add.svg";
import useCreateNote from "../../../utils/useCreateNote";
import useUserLogin from "../../../utils/useAllCategoriesStore";
interface Props {
  categories: any;
}
const Categories: FunctionComponent<Props> = ({ categories }) => {
  const router = useRouter();
  const [categoriesPerYear, setCategoriesPerYear] = useState([]);

  const { userLogin } = useUserLogin();
  const { selectedCategory } = useCategoryStore();
  const { selectedYear } = useCategoryYear();

  const [dataCategory, setDataCategory] = useState(0);

  const { setCreateNote } = useCreateNote();

  useEffect(() => {
    if (categories && categories.length > 0) {
      const categoryYear = categories.filter((values) => {
        return values.subCategory === selectedCategory;
      });

      setCategoriesPerYear(categoryYear);
    } else {
      setCategoriesPerYear([]);
    }
  }, [selectedCategory, categories]);

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
        <>
          <ul className="pt-[1.3vw] relative flex flex-col w-full ">
            {userLogin && (
              <li onClick={() => createNewYear()} className="cursor-pointer">
                <div className=" ml-[31%] text-text w-[42.1vw] flex justify-start items-center text-start font-playfair gap-2 flex-col  md:text-[1vw] pl-3 pb-6 ">
                  <Image className="w-[1.7vw] " src={addIcon} alt="Agregar" />
                  Agregar nota
                </div>
              </li>
            )}
            {categoriesPerYear.map((category) => (
              <li key={category.id} className="z-10 ">
                <Link href={`/${router.pathname}/${category.id}`}>
                  <p
                    key={category.title}
                    className={` hover:opacity-100 font-playfairSemiBold  ml-[27%] text-[19px] w-[44vw] ${styles.text} md:text-[1.2vw] md:leading-[1.5vw] leading-5`}
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
