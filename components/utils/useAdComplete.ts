import create from "zustand";

interface CategorySelected {
  id: number;
  category: string;
  year: number;
  comment: string;
  title: string;
}
interface AdCategoryComplete {
  adCategoryComplete: CategorySelected[];
  setAdCategoryComplete: (category: CategorySelected) => void;
}
const useAdComplete = create<AdCategoryComplete>((set) => ({
  adCategoryComplete: null,
  setAdCategoryComplete: (category: any) =>
    set({ adCategoryComplete: category }),
}));

export default useAdComplete;
