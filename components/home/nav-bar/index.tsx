import React, { useEffect, useState } from "react";
import IconNavbar from "./IconNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../utils/AppProvider";

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
  const { state, dispatch } = useAppContext();

  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
  };
  const router = useRouter();
  const menuItems = [
    { label: "sobre mi", href: "sobre-mi" },
    { label: "derecho", href: "derecho" },
    { label: "psicologia", href: "psicologia" },
    { label: "organico", href: "bienestar" },
    { label: "filosofía", href: "filosofia" },
    { label: "visual", href: "visual" },
    { label: "inspiración", href: "inspiracion" },
  ];
  const [subCategory, setSetsubCategory] = useState<SubCategory[]>([]);
  useEffect(() => {
    if (router.pathname.includes("derecho")) {
      setSetsubCategory([
        {
          id: 0,
          category: "derecho",
          sub: [
            { id: 0, item: "salud" },
            { id: 1, item: "penal" },
            { id: 2, item: "otros" },
          ],
        },
      ]);
    }

    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: "salud" });
  }, [dispatch, router.pathname, router.query.ID]);

  return (
    <div
      className={`${
        maxWhith && "px-[5%] "
      } flex items-center justify-between  mx-auto px-8 h-[150px] w-full  relative`}
    >
      <IconNavbar />
      <div className="w-full mx-auto">
        <ul className="flex items-end gap-4 mx-auto w-max">
          {menuItems.map((item) => (
            <li key={item.href} className={`w-max relative  `}>
              <Link
                className={`text-gray-600  text-2xl ${
                  router.pathname.replace("/[ID]", "") === `/${item.href}` &&
                  "font-playfairSemiBold text-4xl text-black  "
                }`}
                href={`/${item.href}`}
              >
                {item.label}
              </Link>
              {subCategory.map(
                (e) =>
                  item.label === e.category && (
                    <div
                      className="absolute left-[50%] translate-x-[-50%] top-10"
                      key={e.id}
                    >
                      <ul>
                        {e.sub.map((subItem) => (
                          <li
                            className={` ${
                              state.activeCategory !== null &&
                              state.activeCategory.includes(subItem.item)
                                ? "text-black"
                                : "text-gray-500"
                            } text-2xl cursor-pointer font-playfair `}
                            key={subItem.id}
                            onClick={() =>
                              dispatch({
                                type: "SET_ACTIVE_CATEGORY",
                                payload: subItem.item,
                              })
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
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
