import { create } from "zustand";
interface Data {
  year: number;
  category?: string;
  subCategory?: string;
}
interface CreateNote {
  createNote: Data | any;
  setCreateNote: (data: Data) => void;
}

const useCreateNote = create<CreateNote>((set) => ({
  createNote: {},
  setCreateNote: (data: Data) => set({ createNote: data }),
}));
export default useCreateNote;
