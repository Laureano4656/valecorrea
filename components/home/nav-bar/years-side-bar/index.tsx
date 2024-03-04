import React, { useState, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import Year from "./Year";
import useCategoryStore from "../../../utils/useCategoryStore";
import Categories from "./Categories";
import allCategories from "../../../../mooks/all-ads.json";
const YearSideBar = () => {
  const [categories, setCategories] = useState([]);
  const { selectedCategory } = useCategoryStore();

  useEffect(() => {
    // Simulación de datos del endpoint de años
    const categoryFilter = allCategories.filter((category) => {
      return category.categorie === selectedCategory;
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
