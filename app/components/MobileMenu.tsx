import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import MenuButton from "./MenuButton";
import { useState } from "react";
import { useLangStore } from "@/store/useLangStore";
import { links } from "@/constants";

const MobileMenu = () => {
  const { lang } = useLangStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    toggleActive();
  };

  return (
    <div className="md:hidden flex-col">
      <div className="z-50 md:hidden flex items-center">
        <span onClick={toggleMenu} aria-label="Toggle menu">
          <MenuButton active={active} setActive={toggleActive} />
        </span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-20 bg-secondary-dark/90 p-12 flex flex-col gap-6 items-center justify-center">
          <ul className="flex flex-col gap-4 text-xl text-center">
            {links[lang].map((link) => (
              <li key={link.id} onClick={toggleMenu}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <LanguageMenu />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
