// Definir las acciones para el reducer
const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";

// Reducer para manejar el estado global
export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};