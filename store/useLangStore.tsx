import { create } from "zustand";

interface LangStore {
  lang: string;
  setLang: (newLang: string) => void;
}

export const useLangStore = create<LangStore>((set) => ({
  lang: typeof window !== "undefined" ? localStorage.getItem("mirais&a_lang") || "en" : "en",

  setLang: (newLang: string) => {
    localStorage.setItem("mirais&a_lang", newLang);
    set({ lang: newLang });
  },
}));
