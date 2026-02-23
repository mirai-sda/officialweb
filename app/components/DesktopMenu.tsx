import Link from "next/link";
import { links } from "@/constants";
import { useLangStore } from "@/store/useLangStore";
import Logo from "./Logo";
import ContactMenu from "./ContactMenu";
import LanguageMenu from "./LanguageMenu";

const DesktopMenu = () => {
  const { lang } = useLangStore();

  return (
    <div className="hidden lg:flex sticky max-w-screen-2xl mx-auto top-0 z-10 w-full justify-between items-center gap-4 px-4 py-2 lg:px-4k lg:py-4 transition-all duration-300">
      <Logo />
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
      <div className="flex gap-4">
        <ContactMenu />
        <LanguageMenu />
      </div>
    </div>
  );
};

export default DesktopMenu;
