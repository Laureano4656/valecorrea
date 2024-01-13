import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/home/nav-bar";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";

const DerechoId = () => {
  const router = useRouter();
  const [content, setContent] = useState([
    {
      id: 0,
      title: "ONU y los Derechos Humanos",
      description:
        "Los derechos humanos son derechos inherentes a todos los seres humanos, sin\n distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o \n cualquier otra condición.",
    },
  ]);
  useEffect(() => {
    // traerDatosdelid
  }, []);
  return (
    <NavBarFooter>
      <div className="flex flex-col items-center justify-center h-full mx-auto max-w-3/5 gap-9">
        {content.map((e) => (
          <>
            <h1 className="text-5xl text-gray-600 font-playfair">{e.title}</h1>

            <p className="text-xl text-black ">
              {e.description.split("\n").map((line, index) => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </p>
          </>
        ))}
      </div>
      <span className="mx-auto pb-11">
        <ButtonBack onClick={() => router.back()}>
          <Book size={"60%"} color="#fff" />
        </ButtonBack>
      </span>
    </NavBarFooter>
  );
};

export default DerechoId;
