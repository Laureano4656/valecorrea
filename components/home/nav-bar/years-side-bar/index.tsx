import React, { useState, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import Categories from "./Categories";
import useCategoryStore from "../../../utils/useCategoryStore";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "../../../../helpers/env";
import Year from "./Year";
import { useSubcategory } from "../../../../store/useSubcategory";

const YearSideBar: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const { subCategory, selectedSubcategory, setSelectedSubcategory } =
    useSubcategory();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${BASE_URL}/notes/all/${router.asPath.replace(
          "/",
          ""
        )}/${selectedSubcategory}`
      )
      .then((response) => {
        console.log("hola");
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedSubcategory, router.asPath]);

  return (
    <div className={styles.yearsSideBar}>
      <div className="relative sm:w-[49vw] ml-[8vw]">
        {!loading && (
          <>
            <Categories categories={categories} />

            <Year categories={categories} />
          </>
        )}
      </div>
    </div>
  );
};

export default YearSideBar;
