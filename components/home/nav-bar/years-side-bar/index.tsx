import React, { useState, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import Year from "./Year";
import useCategoryStore from "../../../utils/useCategoryStore";
import Categories from "./Categories";
import useAllCategories from "../../../../hooks/useAllCategories";
const YearSideBar = () => {
  const { allCategories } = useAllCategories();
  console.log(allCategories);

  const [categories, setCategories] = useState([]);
  const { selectedCategory } = useCategoryStore();
console.log(selectedCategory);

  useEffect(() => {
    // Simulación de datos del endpoint de años
    const categoryFilter = allCategories.filter((category) => {
      return category.subCategory === selectedCategory;
    });

    setCategories(categoryFilter);
  }, [selectedCategory]);

  return (
    <div className={`${styles.yearsSideBar}`}>
      <Year categories={categories} />
      <div className={`${styles.categories}`}>
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default YearSideBar;
