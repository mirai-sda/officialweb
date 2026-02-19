import { links } from "@/constants";
import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { useLangStore } from "@/store/useLangStore";

const DesktopMenu = () => {
  const { lang } = useLangStore();

  return (
    <div className="hidden md:flex gap-6 items-center">
      <ul className="flex gap-4">
        {links[lang].map((link) => (
          <li
            key={link.id}
            className="hover:text-accent hover:scale-110 transition-all duration-200"
          >
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <LanguageMenu />
    </div>
  );
};

export default DesktopMenu;
