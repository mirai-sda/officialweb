import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LangStore {
  lang: string;
  setLang: (newLang: string) => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",

      setLang: (newLang: string) => {
        set({ lang: newLang });
      },
    }),
    {
      name: "mirais&a_lang",
    },
  ),
);
