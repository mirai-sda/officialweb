"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuButton from "./MenuButton";
import { links } from "@/constants";
import { useLangStore } from "@/store/useLangStore";
import Logo from "./Logo";
import LanguageMenu from "./LanguageMenu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
