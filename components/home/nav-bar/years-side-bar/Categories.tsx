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
import CheckIcon from "../../../icons/CheckIcon";
import CrossIcon from "../../../icons/CrossIcon";
import ButtonAddNote from "../../components/ui/button-add-note";
interface Props {
  categories: any;
}
const Categories: FunctionComponent<Props> = ({ categories }) => {
  const router = useRouter();
  const [categoriesPerYear, setCategoriesPerYear] = useState([]);

  const { userLogin } = useUserLogin();
  const { selectedCategory } = useCategoryStore();
  const { selectedYear } = useCategoryYear();

  const { setCreateNote } = useCreateNote();

  useEffect(() => {
    if (categories && categories.length > 0) {
      const categoryYear = categories.filter((values) => {
        return values.subCategory === selectedCategory;
      });
      const categoriesPerYear = categoryYear.filter((values) => {
        return values.year === selectedYear;
      });

      setCategoriesPerYear(categoriesPerYear);
    } else {
      setCategoriesPerYear([]);
    }
  }, [selectedCategory, categories, selectedYear]);

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
      {userLogin && (
        <div className="hidden sm:block">
          <ButtonAddNote />
        </div>
        // <button
        //   onClick={() => createNewYear()}
        //   className={`fixed z-10 font-playfair min-h-[100px] max-w-[100px] flex gap-[2.5vw] flex-col items-start sm:absolute sm:right-[-15%] sm:top-[-25px] bottom-[2%] right-[25%] `}
        // >
        //   <div className="relative w-[200px] ml-[31%] text-xs  flex justify-start items-center text-start font-playfair sm:gap-2 flex-col  md:text-[1vw] pb-6 ">
        //     <Image className="sm:w-[2vw] w-12" src={addIcon} alt="Agregar" />
        //     <div className="absolute flex items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 sm:opacity-0 opacity-1 left-1/2 top-1/2 hover:sm:opacity-100 ">
        //       <p className="pt-10">Agregar nota</p>
        //     </div>
        //   </div>
        // </button>
      )}
      {categoriesPerYear.length > 0 && (
        <ul className="pt-[1.3vw]  relative flex flex-col gap-[6px]  sm:w-full sm:items-center">
          {categoriesPerYear.map((category) => (
            <>
              {userLogin ? (
                <li className="z-10 relative sm:ml-[7vw] sm:w-[53vw] w-[70vw]">
                  <Link href={`/${router.pathname}/${category.id}`}>
                    <p
                      className={` hover:opacity-100 font-playfairSemiBold w-full block text-[19px] leading-6 overflow-hidden text-ellipsis whitespace-nowrap ${styles.text}`}
                    >
                      {category.title}
                    </p>
                  </Link>
                  {category.active ? (
                    <span className="absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2">
                      <CheckIcon size="12px" />
                    </span>
                  ) : (
                    <span className="absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2">
                      <CrossIcon size="12px" />
                    </span>
                  )}
                </li>
              ) : (
                category.active && (
                  <li className="z-10 relative sm:ml-[7vw] sm:w-[53vw] w-[70vw]">
                    <Link href={`/${router.pathname}/${category.id}`}>
                      <p
                        className={` hover:opacity-100 font-playfairSemiBold w-full block text-[19px] leading-6 overflow-hidden text-ellipsis whitespace-nowrap ${styles.text}`}
                      >
                        {category.title}
                      </p>
                    </Link>
                  </li>
                )
              )}
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default Categories;
