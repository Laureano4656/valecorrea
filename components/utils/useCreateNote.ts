import { create } from "zustand";
interface Data {
  id?: any;
  year?: number;
  category?: string;
  subCategory?: string;
  image?: string;
  image2?: string;
  comment?: string;
  title?: string;
  active?: boolean;
  video?: string;
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
