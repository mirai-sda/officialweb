"use client";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";
import { links, images } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const { lang, setLang } = useLang();

  const handleLang = (lang) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleActive();
  };
  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia a true si se scrollea más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full z-10 flex justify-between px-8 md:justify-around items-center gap-4 md:px-4 py-2 bg-primary-dark md:py-4 fixed top-0 bg-secondary-dark/90 ${
        isScrolled
          ? "bg-secondary-dark/50 hover:bg-secondary-dark/90 shadow-lg"
          : ""
      }`}
    >
      <div className="">
        <img src={images.logo} alt="logo" className="w-full h-6" />
      </div>
      <div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            {links[lang].map((link) => (
              <li
                key={link.id}
                className="hover:text-accent hover:scale-110 transition-all duration-200text-shadow "
              >
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center items-center gap-2">
            <li
              className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                lang === "en" ? "grayscale" : ""
              }`}
              onClick={() => handleLang("es")}
            >
              <img src={images.spanish} alt="" width={20} height={20} />
            </li>
            <li
              className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                lang === "es" ? "grayscale" : ""
              }`}
              onClick={() => handleLang("en")}
            >
              <img src={images.english} alt="" width={20} height={20} />
            </li>
          </ul>
        </div>
        {/* MOBILE MENU */}
        <div className="flex items-center justify-center md:hidden">
          <span
            className="cursor-pointer flex items-center justify-center"
            onClick={toggleMenu}
          >
            <MenuButton active={active} setActive={toggleActive} />
          </span>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-secondary-dark/90 w-full p-12 flex flex-col gap-4 text-center justify-center items-center lg:hidden">
            <ul className="flex flex-col gap-4 text-xl">
              {links[lang].map((link) => (
                <li key={link.id} onClick={toggleMenu}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex justify-center items-center gap-2">
              <li
                className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                  lang === "en" ? "grayscale" : ""
                }`}
                onClick={() => handleLang("es")}
              >
                <img src={images.spanish} alt="" width={20} height={20} />
              </li>
              <li
                className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                  lang === "es" ? "grayscale" : ""
                }`}
                onClick={() => handleLang("en")}
              >
                <img src={images.english} alt="" width={20} height={20} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
