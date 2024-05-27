import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 767) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize(); // Verificar el tamaño de la pantalla inicialmente
    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
