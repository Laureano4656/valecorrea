import React, { FunctionComponent, useEffect, useState } from "react";
import { BASE_URL } from "../../../../../helpers/env";
import { useRouter } from "next/router";
import axios from "axios";
import { useSubcategory } from "../../../../../store/useSubcategory";

const SectionDerecho: FunctionComponent = () => {
  const router = useRouter();
  const { selectedSubcategory } = useSubcategory();

  const [noteList, setNoteList] = useState([]);
  const [loading, setLoading] = useState(true);
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
        console.log(response.data);
        setNoteList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  }, [router, selectedSubcategory]);

  return <div></div>;
};

export default SectionDerecho;
