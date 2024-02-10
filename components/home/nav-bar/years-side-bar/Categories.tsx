import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/years-side-bar.module.css";
import useCategoryStore from "../../../utils/useCategoryStore";
import useCategoryYear from "../../../utils/useCategoryYear";
interface Props {
  categories: any;
}
const Categories: FunctionComponent<Props> = ({ categories }) => {
  const router = useRouter();
  const [categoriesPerYear, setCategoriesPerYear] = useState([]);
  const { selectedYear } = useCategoryYear();

  useEffect(() => {
    const categoryYear = categories.filter((year) => {
      return year.year === selectedYear;
    });
    setCategoriesPerYear(categoryYear);
  }, [selectedYear]);
  
  return (
    <>
      {categoriesPerYear.length > 0 && (
        <ul>
          {categoriesPerYear.map((category) => (
            <li key={category.id}>
              <Link href={`/${router.pathname}/${category.id}`}>
                <p key={category.title} className={`${styles.text}`}>
                  {category.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Categories;
