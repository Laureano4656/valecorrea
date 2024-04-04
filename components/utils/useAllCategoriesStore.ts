import { create } from "zustand";

interface CategoryStore {
  userLogin: boolean;
  setUserLogin: (value: boolean) => void;
}
const useUserLogin = create<CategoryStore>((set) => ({
  userLogin: null,
  setUserLogin: (value: boolean) => set({ userLogin: value }),
}));

export default useUserLogin;
