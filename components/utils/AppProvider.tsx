// AppContext.js

import React, { useReducer, createContext, useContext } from "react";
import { appReducer } from "./appReducer";
interface AppContextType {
  activeCategory: any; // Ajusta este tipo según lo que realmente esperas aquí
}
// Definir el contexto utilizando createContext
const AppContext = createContext<any>(undefined);

// Hook personalizado para acceder al contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Definir las acciones para el reducer

// Componente que proporciona el contexto y el estado global
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { activeCategory: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
