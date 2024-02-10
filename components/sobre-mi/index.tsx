import React, { FunctionComponent } from "react";
import NavBar from "../home/nav-bar";
import Image from "next/image";
import Footer from "../footer";
import sobreMi from "../../static/images/foto sobre mi 2.webp";
import Separator from "../ui/separator";
import styles from "./styles/sobre-mi.module.css";
const SobreMi: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-col justify-between gap-20">
        <div className={styles.header}>
          <div className="relative flex items-center justify-center w-full h-full ">
            <h1
              className={`${styles.title} w-full py-16 text-center font-playfair`}
            >
              valeria
              <br /> correa
            </h1>
          </div>
          <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            <div
              className={`${styles.backGroundSobremi}  w-full h-full absolute `}
            ></div>
          </div>
        </div>
        <p
          className="w-[70%] mx-auto  pb-16 font-playfair"
          style={{ fontSize: "22px" }}
        >
          Soy Vale Correa, nací en Mar del Plata en los años ´80 y me considero
          una persona muy curiosa y creativa, con profundos intereses en el
          estudio y la investigación.
          <Separator height={"37px"} />
          Durante mi carrera formal dediqué toda mi energía a formarme como
          Abogada en la Universidad Pública, abocándome en forma exclusiva al
          Derecho de la Salud, una novel pero consolidada rama jurídica, que me
          abrió las puertas de la labor en equipo a nivel local y nacional. De
          la mano de grandes -y muy generosas- referentes, tuve la oportunidad
          de organizar y participar en <Separator height={"37px"} />
          <Separator height={"37px"} /> Congresos, paneles y disertaciones en
          diferentes provincias argentinas, junto a un grupo humano maravilloso,
          en un intercambio de experiencias del cual, aún hoy, me sigo nutriendo
          profundamente.
          <Separator height={"37px"} />
          Como Especialista en Derecho Penal, logré durante cuatro años generar
          los conocimientos necesarios para conectar todos los puntos y entender
          que mi máximo potencial como profesional se genera a partir de la
          integración de aquellas disciplinas que trabajan muy cerca{" "}
          <Separator height={"37px"} />
          <Separator height={"37px"} /> de las personas, en contacto directo con
          su historia, sus tensiones, sus problemáticas.{" "}
          <Separator height={"37px"} />
          <Separator height={"37px"} /> Más, anhelaba entender mejor como
          funcionamos, de modo que, cuando tuve el espacio, me zambullí de pleno
          en la Licenciatura en Psicología, carrera que me encuentro cursando y
          que produjo el equilibrio que mi recorrido necesitaba.{" "}
          <Separator height={"37px"} />
          <Separator height={"37px"} /> Algunas herramientas adquiridas me
          comprometen de forma especial: ser en Docente de Derecho, e
          Instructora de Yoga en países como Cuba y México canalizan mi
          entusiasmo por compartir, y sintetizar todos los ámbitos del
          desarrollo humano. <Separator height={"37px"} />
          <Separator height={"37px"} />
          Trabajé y sigo trabajando a diario con una visión: hacer un aporte de
          valor que refuerce la conciencia personal y comunitaria, para con
          nuestro Ser y para con el Planeta. <Separator height={"37px"} />
          <Separator height={"37px"} /> Desde el año 2002 me encontrás siempre
          trabajando para el Servicio de Justicia Federal de miciudad.
          <Separator height={"37px"} />
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
