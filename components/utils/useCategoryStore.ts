import create from "zustand";

interface CategoryStore {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}
const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
}));

export default useCategoryStore;
