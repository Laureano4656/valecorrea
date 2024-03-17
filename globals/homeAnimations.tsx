import { create } from "zustand";

export interface AnimationsHome {
  animationsHome: boolean;
  setAnimationsHome: (value: boolean) => void;
}

export const disabledAnimationHome = create<AnimationsHome>((set) => {
  return {
    animationsHome: true,
    setAnimationsHome: (value) => {
      set({ animationsHome: value });
    },
  };
});
