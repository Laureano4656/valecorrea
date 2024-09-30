import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/years-side-bar.module.css";
import useCategoryYear from "../../../utils/useCategoryYear";
import useUserLogin from "../../../utils/useAllCategoriesStore";
import CheckIcon from "../../../icons/CheckIcon";
import CrossIcon from "../../../icons/CrossIcon";

interface CategoriesProps {
  categories: any;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const [categoriesPerYear, setCategoriesPerYear] = useState(categories);
  const { userLogin } = useUserLogin();
  const { selectedYear } = useCategoryYear();

  useEffect(() => {
    const filteredCategories = categories.filter(
      (values) => values.year === selectedYear
    );
    setCategoriesPerYear(filteredCategories);
  }, [categories, selectedYear]);

  return (
    <>
      {categoriesPerYear.length > 0 && (
        <ul className="pt-[1.3vw] relative flex flex-col gap-[6px] sm:w-full sm:items-center">
          {categoriesPerYear.map((category) => (
            <li
              key={category.id}
              className="z-10 relative sm:ml-[7vw] sm:w-[53vw] w-[70vw]"
            >
              <Link href={`/${router.pathname}/${category.id}`}>
                <p
                  className={`hover:opacity-100 font-playfairSemiBold w-full block text-[19px] leading-6 overflow-hidden text-ellipsis whitespace-nowrap ${styles.text}`}
                >
                  {category.title}
                </p>
              </Link>
              {userLogin ? (
                <span className="absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2">
                  {category.active ? (
                    <CheckIcon size="12px" />
                  ) : (
                    <CrossIcon size="12px" />
                  )}
                </span>
              ) : (
                category.active && (
                  <span className="absolute -translate-x-1/2 -translate-y-1/2 -right-6 top-1/2">
                    <CheckIcon size="12px" />
                  </span>
                )
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Categories;
