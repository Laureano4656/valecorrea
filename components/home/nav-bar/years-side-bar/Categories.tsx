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
        <>
          <ul className="pt-[1.3vw] relative flex flex-col w-full sm:items-center">
            {categoriesPerYear.map((category) => (
              <>
                {userLogin ? (
                  <li
                    key={category.id}
                    className=" z-10 sm:ml-[7vw] sm:w-[53vw]"
                  >
                    <Link
                      className="sm:w-fit"
                      href={`/${router.pathname}/${category.id}`}
                    >
                      <p
                        key={category.title}
                        className={` relative hover:opacity-100 font-playfairSemiBold w-fit   text-[19px]  ${styles.text}   leading-6`}
                      >
                        {category.active ? (
                          <span className="absolute -translate-y-1/2 top-1/2 -right-6">
                            <CheckIcon size="12px" />
                          </span>
                        ) : (
                          <span className="absolute -translate-y-1/2 top-1/2 -right-6">
                            <CrossIcon size="12px" />
                          </span>
                        )}
                        {category.title}
                      </p>
                    </Link>
                  </li>
                ) : (
                  category.active && (
                    <li key={category.id} className="z-10 ml-[7vw] w-[53vw]">
                      <Link href={`/${router.pathname}/${category.id}`}>
                        <p
                          key={category.title}
                          className={` hover:opacity-100 font-playfairSemiBold    text-[19px]  ${styles.text} md:text-[1.2vw] md:leading-[1.5vw] leading-5`}
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
        </>
      )}
    </>
  );
};

export default Categories;
