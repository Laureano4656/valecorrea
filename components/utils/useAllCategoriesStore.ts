import { create } from "zustand";
import { useEffect, useState } from "react";

interface CategoryStore {
  userLogin: boolean;
  setUserLogin: (value: boolean) => void;
}

// Store de Zustand para manejar el estado de inicio de sesión del usuario
const useUserLogin = create<CategoryStore>((set) => ({
  userLogin: false, // Valor inicial
  setUserLogin: (value: boolean) => set({ userLogin: value }), // Función para actualizar el estado
}));

// Hook personalizado para manejar el estado de inicio de sesión con localStorage
export const useUserLoginWithStorage = () => {
  const { userLogin, setUserLogin } = useUserLogin();
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); // Marca que el componente se ha montado
    if (typeof window !== "undefined") {
      // Verifica si hay un token en localStorage
      const storedUserData = window.localStorage.getItem("access_token");
      // Sincroniza el estado de login con localStorage
      setUserLogin(storedUserData !== null); 
    }
  }, [setUserLogin]);

  return { userLogin, setUserLogin, mounted }; // Devuelve el estado de inicio de sesión y la función para actualizarlo
};

export default useUserLogin;
