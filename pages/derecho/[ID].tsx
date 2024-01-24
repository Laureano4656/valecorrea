import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/home/nav-bar";
import NavBarFooter from "../../components/navbar-footer";
import ButtonBack from "../../components/ui/ButtonBack";
import Book from "../../components/icons/Book";

const DerechoId = () => {
  const router = useRouter();
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (router?.query?.ID === "0") {
      setContent([
        {
          id: 0,
          title: "ONU y los Derechos Humanos",
          description:
            "Los derechos humanos son derechos inherentes a todos los seres humanos, sin\n distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o \n cualquier otra condición.",
        },
      ]);
    }
    if (router?.query?.ID === "1") {
      setContent([
        {
          id: 1,
          title:
            "DELITOS DE LESA HUMANIDAD / Dominio de la voluntad por aparatos organizados de poder de Clauss Roxin.",
          description: "",
        },
      ]);
    }
    // traerDatosdelid
  }, []);
  return (
    <NavBarFooter>
      <div className="flex flex-col items-center justify-center w-10/12 h-full mx-auto max-w-3/5 gap-9">
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
