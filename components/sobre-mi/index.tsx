import React, { FunctionComponent } from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import Separator from "../ui/separator";
import styles from "./styles/sobre-mi.module.css";
const SobreMi: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div
        className={`${styles.container} relative flex flex-col justify-between gap-8 pl-[calc(5% + 4.5vw)]`}
      >
        <div className={styles.header}>
          <div className="relative flex items-center justify-center h-full w-max ">
            <h1
              className={`${styles.title} w-full text-[4.6vw] py-16 text-center font-playfair`}
            >
              valeria
              <br /> correa
            </h1>
          </div>
          <div
            style={{ height: "calc(100vh - 8.2vw)" }}
            className="relative flex items-center justify-center w-full overflow-hidden"
          >
            <div
              className={`${styles.backGroundSobremi}  w-full h-full absolute `}
            ></div>
          </div>
        </div>
        <p className="w-full max-w-[60.2vw] md:text-[1.2vw] text-[19px] text-justify mx-auto  pb-16 font-playfair">
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
          Congresos, paneles y disertaciones en diferentes provincias
          argentinas, junto a un grupo humano maravilloso, en un intercambio de
          experiencias del cual, aún hoy, me sigo nutriendo profundamente.
          <br />
          <br />
          Como Especialista en Derecho Penal, logré durante cuatro años generar
          los conocimientos necesarios para conectar todos los puntos y entender
          que mi máximo potencial como profesional se genera a partir de la
          integración de aquellas disciplinas que trabajan muy cerca <br />
          de las personas, en contacto directo con su historia, sus tensiones,
          sus problemáticas.
          <br /> Más, anhelaba entender mejor como funcionamos, de modo que,
          cuando tuve el espacio, me zambullí de pleno en la Licenciatura en
          Psicología, carrera que me encuentro cursando y que produjo el
          equilibrio que mi recorrido necesitaba. <br /> <br />
          Algunas herramientas adquiridas me comprometen de forma especial: ser
          en Docente de Derecho, e Instructora de Yoga en países como Cuba y
          México canalizan mi entusiasmo por compartir, y sintetizar todos los
          ámbitos del desarrollo humano. <br />
          <br />
          Trabajé y sigo trabajando a diario con una visión: hacer un aporte de
          valor que refuerce la conciencia personal y comunitaria, para con
          nuestro Ser y para con el Planeta.
          <br /> Desde el año 2002 me encontrás siempre trabajando para el
          Servicio de Justicia Federal de miciudad.
          <br />
          <br />
          En mi expresión intento ejercitarme con frecuencia en el uso la X, la
          E, @ o #, entre otras marcaslingüísticas que contribuyen a construir
          BRANDIGmodos mas auténticos de narrarnos. Porque aun creo que las
          cosas pueden cambiar.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SobreMi;
