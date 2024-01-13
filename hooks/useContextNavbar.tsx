// Hook personalizado para acceder al contexto
import React, { createContext, useReducer, useContext } from "react";

// Define el tipo del contexto
interface AppContextType {
  activeCategory: any; // Ajusta este tipo según lo que realmente esperas aquí
}

// Crea el contexto con el tipo definido
const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
