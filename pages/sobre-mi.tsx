import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/home/nav-bar";
import Image from "next/image";
import sobreMi from "../static/images/Foto Sobre Mi.png";
const myInfo = () => {
  // const [topValue, setTopValue] = useState("-24%");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Obtener la posición de desplazamiento actual
  //     const scrollY = window.scrollY;

  //     // Cambiar la posición del elemento en función del desplazamiento
  //     if (scrollY) {
  //       setTopValue(`${scrollY / 10}%`);
  //     } else {
  //       setTopValue(`-${scrollY / 10}%`);
  //     }
  //   };

  //   // Agregar el event listener al montar el componente
  //   window.addEventListener("scroll", handleScroll);

  //   // Eliminar el event listener al desmontar el componente
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const [isExpanded, setIsExpanded] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 200) {
  //       setIsExpanded(true);
  //     }
  //     // if(scrollPosition < 50){

  //     //   setIsExpanded(false);
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <NavBar />
      <div className="relative flex flex-col justify-between">
        <div
          // className={` flex justify-between items-center w-full ${
          //   isExpanded ? "flex-col-reverse" : ""
          // }`}
          className={` flex justify-between flex-col-reverse items-center w-full `}
        >
          <h1 className="py-16 text-center font-playfair text-8xl">
            valeria correa
          </h1>
          <div className="w-full ">
            <div className="relative w-full h-full overflow-hidden ">
              {/* <img
                src={`${sobreMi}`}
                className={`animated-element ${
                  isExpanded ? "" : "expanded h-[80vh]"
                }  object-cover mx-auto mt-16    `}
                alt={"Sobre mi"}
              /> */}
              <Image
                src={sobreMi}
                className={`animated-element  object-cover mx-auto mt-16    `}
                alt={"Sobre mi"}
              />
            </div>
          </div>
        </div>
        <p className="w-[70%] mx-auto text-2xl pb-16 font-playfair">
          Soy Vale Correa, nací en Mar del Plata en los años ´80 y me considero
          una persona muy curiosa y creativa, con profundos intereses en el
          estudio y la investigación.
          <br />
          <br />
          Durante mi carrera formal dediqué toda mi energía a formarme como
          Abogada en la Universidad Pública, abocándome en forma exclusiva al
          Derecho de la Salud, una novel pero consolidada rama jurídica, que me
          abrió las puertas de la labor en equipo a nivel local y nacional. De
          la mano de grandes -y muy generosas- referentes, tuve la oportunidad
          de organizar y participar en <br />
          <br /> Congresos, paneles y disertaciones en diferentes provincias
          argentinas, junto a un grupo humano maravilloso, en un intercambio de
          experiencias del cual, aún hoy, me sigo nutriendo profundamente.{" "}
          <br />
          <br />
          Como Especialista en Derecho Penal, logré durante cuatro años generar
          los conocimientos necesarios para conectar todos los puntos y entender
          que mi máximo potencial como profesional se genera a partir de la
          integración de aquellas disciplinas que trabajan muy cerca <br />
          <br /> de las personas, en contacto directo con su historia, sus
          tensiones, sus problemáticas. <br />
          <br /> Más, anhelaba entender mejor como funcionamos, de modo que,
          cuando tuve el espacio, me zambullí de pleno en la Licenciatura en
          Psicología, carrera que me encuentro cursando y que produjo el
          equilibrio que mi recorrido necesitaba. <br />
          <br /> Algunas herramientas adquiridas me comprometen de forma
          especial: ser en Docente de Derecho, e Instructora de Yoga en países
          como Cuba y México canalizan mi entusiasmo por compartir, y sintetizar
          todos los ámbitos del desarrollo humano. <br />
          <br />
          Trabajé y sigo trabajando a diario con una visión: hacer un aporte de
          valor que refuerce la conciencia personal y comunitaria, para con
          nuestro Ser y para con el Planeta. <br />
          <br /> Desde el año 2002 me encontrás siempre trabajando para el
          Servicio de Justicia Federal de miciudad.
          <br />
          <br /> En mi expresión intento ejercitarme con frecuencia en el uso la
          X, la E, @ o #, entre otras marcaslingüísticas que contribuyen a
          construir BRANDIGmodos mas auténticos de narrarnos. Porque aun creo
          que las cosas pueden cambiar.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default myInfo;
