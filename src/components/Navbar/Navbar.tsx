import { memo, useState, useCallback } from "react";
import img from "/Logo/logo.png";
import { LuPanelBottomClose, LuPanelTopClose } from "react-icons/lu";
import GooeyNav from "../GooeyNav";

interface GooeyNavItem {
  label: string;
  href: string;
}

const navbarLinks: GooeyNavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = memo(function () {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileClick = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className="navbar container mx-auto fixed top-6 h-[60px] bg-[#0d1117] rounded-lg md:w-[95%] w-full flex items-center z-50">
        <div className="navbar-container relative flex items-center w-full justify-between">

          {/* Logo */}
          <picture className="navbar-logo lg:pl-14! md:pl-4! pl-4! w-[150px] md:w-[250px]">
            <img
              src={img}
              className="w-full"
              alt="logo"
              loading="eager"
            />
          </picture>

          <nav className="lg:pr-8! md:pr-4! pr-2! hidden md:flex items-center">
            <GooeyNav
              items={navbarLinks}
              particleCount={10}
              particleDistances={[60, 10]}
              particleR={70}
              initialActiveIndex={0}
              animationTime={450}
              timeVariance={250}
              colors={[1, 2, 3, 2, 3]}
            />
          </nav>

          {/* Mobile Icon */}
          <div className="navbar-linksIcon flex md:hidden !px-5">
            {isOpen ? (
              <LuPanelTopClose
                onClick={() => setIsOpen(false)}
                className="text-4xl text-[var(--first-color)]"
              />
            ) : (
              <LuPanelBottomClose
                onClick={() => setIsOpen(true)}
                className="text-4xl text-[var(--first-color)]"
              />
            )}
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <nav
        className={`fixed top-[5rem] left-0 w-full shadow-2xl bg-[#0d1117] 
        flex flex-col gap-6 p-6 py-10 z-40 md:hidden 
        transform transition-all duration-300 origin-top
        ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
      >
        {navbarLinks.map((link, index) => (
          <a
            key={link.href}
            onClick={() => handleMobileClick(index)}
            className={`text-white text-lg transition-all duration-200 ${index === activeIndex ? "font-bold text-[var(--first-color)]" : ""
              }`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
});

export default Navbar;
