import { create } from "zustand";

interface activeContact {
  activeContact: boolean;
  setActiveContact: (value: boolean) => void;
}
const useActiveContact = create<activeContact>((set) => ({
  activeContact: null,
  setActiveContact: (value: boolean) => set({ activeContact: value }),
}));

export default useActiveContact;
