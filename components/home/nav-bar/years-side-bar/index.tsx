import React, { useState, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import Year from "./Year";
import useCategoryStore from "../../../utils/useCategoryStore";
import Categories from "./Categories";
import useAllCategories from "../../../../hooks/useAllCategories";
import { useRouter } from "next/router";
const YearSideBar = () => {
  const { allCategories } = useAllCategories();

  const [categories, setCategories] = useState([]);
  const { selectedCategory } = useCategoryStore();
  const router = useRouter();

  useEffect(() => {
    // Simulación de datos del endpoint de años
    const categoryFilter = allCategories.filter((category) => {
      return (
        category.subCategory === selectedCategory &&
        category.category === router.asPath.replace("/", "")
      );
    });
    setCategories(categoryFilter);
  }, [selectedCategory, allCategories]);

  return (
    <div className={`${styles.yearsSideBar}`}>
      <div className={` relative ${styles.categories}`}>
        <Categories categories={categories} />
        <Year categories={categories} />
      </div>
    </div>
  );
};

export default YearSideBar;
