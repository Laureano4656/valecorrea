import create from "zustand";

interface CategoryStoreYear {
  selectedYear: number | null;
  setSelectedYear: (year: number) => void;
}
const useCategoryYear = create<CategoryStoreYear>((set) => ({
  selectedYear: null,
  setSelectedYear: (year: number) => set({ selectedYear: year }),
}));

export default useCategoryYear;
