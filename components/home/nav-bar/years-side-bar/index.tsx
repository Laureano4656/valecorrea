import React, { useState, useEffect } from "react";
import styles from "./styles/years-side-bar.module.css";
import Categories from "./Categories";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "../../../../helpers/env";
import Year from "./Year";
import { useSubcategory } from "../../../../store/useSubcategory";
import useUserLogin, {
  useUserLoginWithStorage,
} from "../../../utils/useAllCategoriesStore";
import ButtonAddNote from "../../components/ui/button-add-note";

const YearSideBar: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const { subCategory, selectedSubcategory, setSelectedSubcategory } =
    useSubcategory();
  const { userLogin } = useUserLoginWithStorage();
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
        console.log("error");
        console.log(error);
      });
  }, [selectedSubcategory, router.asPath, subCategory]);

  return (
    <div className={styles.yearsSideBar}>
      <div className="relative sm:w-[49vw] ml-[8vw]">
        {userLogin && (
          <div className="hidden sm:block">
            <ButtonAddNote />
          </div>
        )}
        {loading ? (
          "Cargando notas"
        ) : categories.length > 0 ? (
          <>
            <Categories categories={categories} />
            <Year categories={categories} />{" "}
          </>
        ) : (
          "En este  momento no hay notas en esta sección"
        )}
      </div>
    </div>
  );
};

export default YearSideBar;
