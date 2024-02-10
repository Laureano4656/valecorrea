import React from "react";
import SobreMi from "../components/sobre-mi";
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

  return <SobreMi />;
};

export default myInfo;
