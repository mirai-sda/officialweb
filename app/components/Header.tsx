"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full  shadow-md border-b border-primary/10 sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-xs" : "bg-white"
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
