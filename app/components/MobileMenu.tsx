import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";
import { useLangStore } from "@/store/useLangStore";
import { links } from "@/constants";
import ContactMenu from "./ContactMenu";
import Logo from "./Logo";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden sticky top-0 z-10 flex flex-col px-4 py-2">
      <div className="z-20 flex items-center justify-between">
        <Logo />
        <span onClick={toggleMenu} aria-label="Toggle menu">
          <MenuButton active={active} setActive={toggleActive} />
        </span>
      </div>

      {isOpen && (
        <div className="z-10 h-screen flex flex-col gap-8 items-center py-20 justify-start bg-white/50 backdrop-blur-sm transition-all duration-300">
          <ul className="flex flex-col gap-8 text-2xl text-center ">
            {links[lang].map((link) => (
              <li key={link.id} onClick={toggleMenu}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ContactMenu />
          <LanguageMenu />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
