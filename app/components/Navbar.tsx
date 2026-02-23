"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="flex flex-col justify-center ">
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
