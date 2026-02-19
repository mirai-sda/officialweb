import Image from "next/image";
import { languages } from "@/constants";
import { useLangStore } from "@/store/useLangStore";

const LanguageMenu = () => {
  const { lang, setLang } = useLangStore();

  return (
    <ul className="flex items-center gap-2">
      {Object.entries(languages).map(([key, value]) => (
        <li
          key={key}
          className={`cursor-pointer transition-all duration-200 hover:scale-125 ${
            lang !== key ? "grayscale" : ""
          }`}
          onClick={() => setLang(key)}
        >
          <Image src={value.image} alt={value.name} width={20} height={20} />
        </li>
      ))}
    </ul>
  );
};

export default LanguageMenu;
