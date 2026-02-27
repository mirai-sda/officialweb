import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Language } from "../types";
interface LangStore {
  lang: Language;
  setLang: (newLang: Language) => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",

      setLang: (newLang: Language) => {
        set({ lang: newLang });
      },
    }),
    {
      name: "mirais&a_lang",
    },
  ),
);
