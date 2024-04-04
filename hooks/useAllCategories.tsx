import { create } from "zustand";

import allCategoriesJson from "../mooks/all-ads.json";

interface AllCategories {
  allCategories: any;
  setAllCategories: any;
}
const useAllCategories = create<AllCategories>((set) => ({
  allCategories: allCategoriesJson,
  setAllCategories: (allCategories: string) =>
    set({ allCategories: allCategories }),
}));

export default useAllCategories;
