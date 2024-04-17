import React, { FunctionComponent } from "react";
import NavBar from "../home/nav-bar";
import Footer from "../footer";
import Separator from "../ui/separator";
import styles from "./styles/sobre-mi.module.css";
import imagenMy from "../../static/images/foto Sobre Mi.png";
import Image from "next/image";
const SobreMi: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div
        className={
          "relative text-justify  flex md:w-[66.5vw] w-11/12 mx-auto flex-col justify-between gap-8 pb-12"
        }
      >
        <Image
          src={imagenMy}
          alt="imagen"
          width={0}
          height={0}
          className="min-w-[200px] min-h-[200px]  w-[15vw] h-[15vw] object-cover rounded-[100%] mx-auto"
          style={{ objectPosition: "70%" }}
        />

        <h1 className="text-center text-titles">VALERIA CORREA</h1>
        <h2 className="text-center text-subtitles">
          LA POTENCIA DE LO COLECTIVO ES INFINITA
        </h2>
        <h3 className="font-playfairExtraBold text-list_heading ">Soy</h3>
        <p className="font-playfair text-text">
          Nací en Mar del Plata en los años ´80, mi nombre es Valeria Correa;
          soy abogada y trabajo desde muy joven en el estudio de las áreas del
          derecho que mayor motivación y compromiso me despiertan: salud,
          ambiente, perspectiva de género, divulgación de derechos, entre otros
          intereses. Encuentro un profundo interés en investigar aquellos
          despliegues jurídicos que nos atraviesan, mediante una atenta
          observación del ser desde su integralidad, analizando nuestras
          problemáticas con una mirada humanitaria y proyección hacia la
          comunidad.
        </p>
        <h3 className="font-playfairExtraBold md:text-[1.5vw] text-list_heading  ">
          Convicción{" "}
        </h3>
        <p className="font-playfair text-text">
          Como a muchos estudiantes les sucede, no sabía muy bien que estaba
          haciendo en el mundo del derecho hasta que una causa relacionada con
          la salud llegó a mis manos. Cada paso que damos en la construcción de
          los derechos impacta profunda y directamente en la mejora de la
          calidad de vida y el bienestar general. Tenemos la posibilidad única
          de ser agentes activos de pequeños grandes cambios. El contexto
          regional actual propone un escenario complejo, urgente, para aquellos
          profesionales involucrados con la realidad, donde todos los esfuerzos
          parecieran resultar insuficientes. Es allí, donde la vocación y
          capacitación permanente, se transforman en pilares imprescindibles
          para reflexionar y accionar con seriedad en el presente.
        </p>
        <h3 className="font-playfairExtraBold md:text-[1.5vw] text-list_heading  ">
          Forjando el camino
        </h3>
        <p className="font-playfair text-text">
          He tenido la oportunidad de compartir mis inicios con grandes
          profesionales, que generosamente abrieron las puertas de sus
          conocimientos y experiencias. Trabajamos en equipo, a nivel local y
          nacional. La transversalidad de espacios -congresos, paneles y
          disertaciones, encuentros en diferentes provincias argentinas- me
          nutrieron en un intercambio de experiencias sumamente valioso, que
          forjaron el camino. Sensibilizar la mirada, en red, con otrxs.
        </p>
        <h3 className="font-playfairExtraBold md:text-[1.5vw] text-list_heading  ">
          Herramientas{" "}
        </h3>
        <p className="font-playfair text-text">
          Mi potencial mas genuino, mi propia humanidad y profesionalismo, surge
          a partir de la integración de aquellas disciplinas que trabajan en
          contacto directo con nuestra historia, tensiones, problemáticas. Con
          las contradicciones y las aristas mas vulnerables, que también nos
          conforman.
          <br />
          <br />
          En mi trabajo diario intento trasmitir con entusiasmo algo de los
          aprendido, tal como hicieron conmigo (impulsando a jóvenes
          profesionales hacia sus propias búsquedas), elevar la consciencia
          desde las prácticas diarias (meditación, yoga, psicología, gracias!).
          Incansablemente , seguir las huellas de la autenticidad. Tender los
          puentes y animarnos a cruzarlos juntxs*.
        </p>
        <h3 className="font-playfairExtraBold md:text-[1.5vw] text-list_heading  ">
          Hoy
        </h3>
        <p className="font-playfair text-text">
          Desde el año 2002 trabajo para la Justicia Federal de mi ciudad,
          actualmente a cargo de una Secretaria Civil y Comercial. En 2021
          comencé, a generar espacios de divulgación científica sumamente
          enriquecedores, donde, junto a profesionales de diversas áreas,
          hacemos foco en tópicos que recorren sensiblemente los derechos
          humanos.
        </p>
        {/* <div className={styles.header}>
          <div className="relative flex items-center justify-center h-full w-max ">
            <h1
              className={`${styles.title} w-full text-[4.6vw] py-16 text-center font-playfair font-normal`}
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
        </div> */}
      </div>
      {/* <p className="w-full max-w-[60.2vw]  text-text text-justify mx-auto  pb-16 font-playfair">
        Soy Vale Correa, nací en Mar del Plata en los años ´80 y me considero
        una persona muy curiosa y creativa, con profundos intereses en el
        estudio y la investigación.
        <br />
        <br />
        Durante mi carrera formal dediqué toda mi energía a formarme como
        Abogada en la Universidad Pública, abocándome en forma exclusiva al
        Derecho de la Salud, una novel pero consolidada rama jurídica, que me
        abrió las puertas de la labor en equipo a nivel local y nacional. De la
        mano de grandes -y muy generosas- referentes, tuve la oportunidad de
        organizar y participar en <br />
        Congresos, paneles y disertaciones en diferentes provincias argentinas,
        junto a un grupo humano maravilloso, en un intercambio de experiencias
        del cual, aún hoy, me sigo nutriendo profundamente.
        <br />
        <br />
        Como Especialista en Derecho Penal, logré durante cuatro años generar
        los conocimientos necesarios para conectar todos los puntos y entender
        que mi máximo potencial como profesional se genera a partir de la
        integración de aquellas disciplinas que trabajan muy cerca <br />
        de las personas, en contacto directo con su historia, sus tensiones, sus
        problemáticas.
        <br /> Más, anhelaba entender mejor como funcionamos, de modo que,
        cuando tuve el espacio, me zambullí de pleno en la Licenciatura en
        Psicología, carrera que me encuentro cursando y que produjo el
        equilibrio que mi recorrido necesitaba. <br /> <br />
        Algunas herramientas adquiridas me comprometen de forma especial: ser en
        Docente de Derecho, e Instructora de Yoga en países como Cuba y México
        canalizan mi entusiasmo por compartir, y sintetizar todos los ámbitos
        del desarrollo humano. <br />
        <br />
        Trabajé y sigo trabajando a diario con una visión: hacer un aporte de
        valor que refuerce la conciencia personal y comunitaria, para con
        nuestro Ser y para con el Planeta.
        <br /> Desde el año 2002 me encontrás siempre trabajando para el
        Servicio de Justicia Federal de miciudad.
        <br />
        <br />
        En mi expresión intento ejercitarme con frecuencia en el uso la X, la E,
        @ o #, entre otras marcaslingüísticas que contribuyen a construir
        BRANDIGmodos mas auténticos de narrarnos. Porque aun creo que las cosas
        pueden cambiar.
      </p> */}
      <ul>
        <li></li>
      </ul>
      <Footer />
    </>
  );
};

export default SobreMi;
