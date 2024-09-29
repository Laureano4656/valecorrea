import React, { useEffect, useState } from "react";
import IconNavbar from "./IconNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import useCategoryStore from "../../utils/useCategoryStore";
import useActiveContact from "../../utils/useActiveFooter";
import { useSubcategory } from "../../../store/useSubcategory";
interface props {
  maxWhith?: boolean;
}
interface SubCategoryIds {
  id: number;
  item: string;
}
interface SubCategory {
  id: number;
  category: string;
  sub: SubCategoryIds[];
}
const NavBar: React.FC<props> = ({ maxWhith }) => {
  const router = useRouter();
  const { setActiveContact } = useActiveContact();
  const [activeMenu, setActiveMenu] = useState(false);
  const { subCategory, selectedSubcategory, setSelectedSubcategory } =
    useSubcategory();

  const menuItems = [
    { label: "sobre mí", href: "sobre-mi" },
    { label: "derecho", href: "derecho" },
    { label: "psicología", href: "psicologia" },
    { label: "organico", href: "organico" },
    { label: "filosofía ", href: "filosofia" },
    { label: "bienestar", href: "bienestar" },
    { label: "inspiración ", href: "inspiracion" },
  ];
  // useEffect(() => {
  //   if (
  //     router.pathname.includes("derecho") &&
  //     router?.pathname !== "/derecho/[ID]"
  //   ) {
  //     setSubcategory([
  //       {
  //         id: 0,
  //         category: "derecho",
  //         sub: [
  //           { id: 0, item: "salud" },
  //           { id: 1, item: "penal" },
  //           { id: 2, item: "otros" },
  //         ],
  //       },
  //     ]);
  //   }
  // }, [selectedCategory, router.pathname, router.query.ID]);

  useEffect(() => {
    setSelectedSubcategory("salud");
  }, []);

  return (
    <div
      className={` flex items-center justify-between  mx-auto  px-[4.3%]  sm:h-[8.2vw] w-full  relative`}
    >
      <div className="fixed top-0 z-50 flex flex-col w-full -translate-x-1/2 left-1/2 sm:hidden">
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          className="flex items-center justify-center w-full p-3 py-2 text-base bg-slate-200 h-50"
        >
          MENÚ
        </button>
        {subCategory.map(
          (e) =>
            router.pathname.split("/")[1] === e.category && (
              <div className="z-50 justify-center w-full " key={e.id}>
                <ul>
                  {e.sub.map((subItem) => (
                    <li
                      className={`text-xs ${
                        selectedSubcategory !== null &&
                        selectedSubcategory.includes(subItem.item)
                          ? "text-black"
                          : "text-gray-500"
                      }  cursor-pointer font-playfair text-center `}
                      key={subItem.id}
                      onClick={() => setSelectedSubcategory(subItem.item)}
                    >
                      *{subItem.item}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
        {activeMenu && (
          <>
            <ul className="flex flex-col items-center gap-3 pb-5 no-underline pt-5 bg-[rgba(255,255,255,0.9)]">
              {menuItems.map((item) => (
                <>
                  <li key={item.href} className={`w-max relative  `}>
                    <Link
                      className={` ${
                        router.pathname.replace("/[ID]", "") === `/${item.href}`
                          ? "font-playfairSemiBold text-base  opacity-100  text-black underline"
                          : "text-black opacity-60 text-base   font-playfair "
                      }`}
                      href={`/${item.href}`}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  </li>
                </>
              ))}
              <li
                onClick={() => setActiveContact(true)}
                className={` ${"text-black opacity-60 text-base   font-playfair "}`}
              >
                CONTACTO
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="absolute hidden -translate-y-1/2 top-1/2 sm:flex">
        <IconNavbar />
      </div>

      <div className="top-0 left-0 justify-center hidden w-full mx-auto sm:flex ">
        <ul className="flex items-end gap-[1vw]  w-max ">
          {menuItems.map((item) => (
            <li key={item.href} className={`w-max relative`}>
              <Link
                className={` ${
                  router.pathname.replace("/[ID]", "") === `/${item.href}`
                    ? "font-playfairSemiBold text-[1.7vw]  opacity-100  text-black"
                    : "text-black opacity-60 text-[1.3vw]   font-playfair "
                }`}
                href={`/${item.href}`}
              >
                {item.label}
              </Link>

              {router.asPath.replace("/", "") === "derecho" &&
                subCategory.map(
                  (e) =>
                    item.label === e.category && (
                      <div
                        className="absolute left-[50%] translate-x-[-50%]  z-[600] top-[3vw]"
                        key={e.id}
                      >
                        <ul>
                          {e.sub.map((subItem) => (
                            <li
                              className={`text-[1.2vw] ${
                                selectedSubcategory !== null &&
                                selectedSubcategory.includes(subItem.item)
                                  ? "text-black"
                                  : "text-gray-500"
                              }  cursor-pointer font-playfair `}
                              key={subItem.id}
                              onClick={() =>
                                setSelectedSubcategory(subItem.item)
                              }
                            >
                              *{subItem.item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
            </li>
          ))}
          <li
            onClick={() => setActiveContact(true)}
            className={`text-[1.3vw] ${"text-gray-500"}  cursor-pointer font-playfair `}
          >
            contacto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
