import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../utils/AppProvider";

const YearSideBar = () => {
  const { state } = useAppContext();
  const [activeYear, setActiveYear] = useState(null);
  const [yearList, setYearList] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const categorieObjet = [
    {
      id: 0,
      year: 2023,
      subcategories: [
        {
          subId: 0,
          subTitle: "ONU y los Derechos Humanos",
        },
        {
          subId: 1,
          subTitle: "Derechos humanos y democracia",
        },
        {
          subId: 2,
          subTitle: "Derecho a la Sanidad",
        },
      ],
    },
    {
      id: 1,
      year: 2022,
      subcategories: [
        {
          subId: 0,
          subTitle: "Subcategoría 5",
        },
      ],
    },
    {
      id: 3,
      year: 2021,
      subcategories: [
        {
          subId: 0,
          subTitle: "Subcategoría 5",
        },
        {
          subId: 1,
          subTitle: "Subcategoría 6",
        },
      ],
    },
  ];
  useEffect(() => {
    // Simulación de datos del endpoint de años

    setYearList([
      {
        year: 2023,
      },
      {
        year: 2022,
      },
      {
        year: 2021,
      },
    ]);
    handleYearClick(2023);
  }, [state]);

  const handleYearClick = (clickedYear: number) => {
    setActiveYear(clickedYear);

    return setCategories(
      categorieObjet.filter((e) => {
        return clickedYear === e.year;
      })
    );
  };

  return (
    <div className=" overflow-y-scroll  flex justify-between items-start  pl-[150px]  gap-10  scroll-transparent">
      <div className="min-w-[300px] col-span-1 h-full flex flex-col justify-start">
        {categories.length > 0 && (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/${router.pathname}/${category.id}`}>
                  {category.subcategories.map((subcategory) => (
                    <p
                      key={subcategory.subTitle}
                      className="h-full text-2xl text-gray-600"
                    >
                      {subcategory.subTitle}
                    </p>
                  ))}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-[120px] flex flex-col items-end">
        {yearList.map((yearItem) => (
          <p
            key={yearItem.year}
            className={` col-span-1${
              activeYear === yearItem.year && "font-playfairExtraBold text-5xl "
            } text-4xl font-playfair  w-auto cursor-pointer`}
            onClick={() => handleYearClick(yearItem.year)}
          >
            {yearItem.year}
          </p>
        ))}
      </div>
    </div>
  );
};

export default YearSideBar;
