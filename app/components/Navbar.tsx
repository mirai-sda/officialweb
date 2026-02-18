"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuButton from "./MenuButton";
import { links, images } from "@/constants";
import { useLangStore } from "@/store/useLangStore";

type Lang = "es" | "en";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const { lang, setLang } = useLangStore();

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    toggleActive();
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 w-full flex justify-between items-center gap-4 px-8 py-2 md:px-4 md:py-4 bg-secondary-dark/90 transition-all ${
        isScrolled
          ? "bg-secondary-dark/50 hover:bg-secondary-dark/90 shadow-lg"
          : ""
      }`}
    >
      {/* LOGO */}
      <div>
        <Image
          src={images.logo}
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-auto "
          priority
        />
      </div>

      {/* DESKTOP MENU */}
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

        <ul className="flex items-center gap-2">
          <li
            className={`cursor-pointer transition-all duration-200 hover:scale-125 ${
              lang === "en" ? "grayscale" : ""
            }`}
            onClick={() => setLang("es")}
          >
            <Image src={images.spanish} alt="Spanish" width={20} height={20} />
          </li>
          <li
            className={`cursor-pointer transition-all duration-200 hover:scale-125 ${
              lang === "es" ? "grayscale" : ""
            }`}
            onClick={() => setLang("en")}
          >
            <Image src={images.english} alt="English" width={20} height={20} />
          </li>
        </ul>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="z-50 md:hidden flex items-center">
        <span onClick={toggleMenu} aria-label="Toggle menu">
          <MenuButton active={active} setActive={toggleActive} />
        </span>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-secondary-dark/90 p-12 flex flex-col gap-6 items-center justify-center md:hidden">
          <ul className="flex flex-col gap-4 text-xl text-center">
            {links[lang].map((link) => (
              <li key={link.id} onClick={toggleMenu}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4">
            <li
              className={`cursor-pointer transition-all hover:scale-125 ${
                lang === "en" ? "grayscale" : ""
              }`}
              onClick={() => setLang("es")}
            >
              <Image
                src={images.spanish}
                alt="Spanish"
                width={20}
                height={20}
              />
            </li>
            <li
              className={`cursor-pointer transition-all hover:scale-125 ${
                lang === "es" ? "grayscale" : ""
              }`}
              onClick={() => setLang("en")}
            >
              <Image
                src={images.english}
                alt="English"
                width={20}
                height={20}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
