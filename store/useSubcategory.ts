import { create } from "zustand";

export interface ISubItem {
  id: number;
  item: string;
}

export interface ICategory {
  id: number;
  category: string;
  sub: ISubItem[];
}

export interface IPropertyStore {
  subCategory: ICategory[]; 
  selectedSubcategory: string | null; 
  setSubcategory: (value: ICategory[]) => void; 
  setSelectedSubcategory: (value: string) => void; 
}

export const useSubcategory = create<IPropertyStore>((set) => ({
  subCategory: [
    {
      id: 0,
      category: "derecho",
      sub: [
        { id: 0, item: "salud" },
        { id: 1, item: "penal" },
        { id: 2, item: "otros" },
      ],
    },
  ],
  selectedSubcategory: "salud",
  setSubcategory: (value) => set({ subCategory: value }),
  setSelectedSubcategory: (value) => set({ selectedSubcategory: value }),
}));
