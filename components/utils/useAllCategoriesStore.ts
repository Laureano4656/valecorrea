import { create } from "zustand";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface CategoryStore {
  userLogin: boolean;
  setUserLogin: (value: boolean) => void;
}

const useUserLogin = create<CategoryStore>((set) => ({
  userLogin: false,
  setUserLogin: (value: boolean) => set({ userLogin: value }),
}));

export const useUserLoginWithStorage = () => {
  const { userLogin, setUserLogin } = useUserLogin();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const storedUserData = window.localStorage.getItem("access_token");

      setUserLogin(storedUserData !== null);
    }
  }, [setUserLogin, router]);

  return { userLogin, setUserLogin, mounted };
};

export default useUserLogin;
