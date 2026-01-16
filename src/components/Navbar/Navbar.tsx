import { memo, useState, useEffect, useCallback } from "react";
import img from "/Logo/logo.png";
import { LuPanelBottomClose, LuPanelTopClose } from "react-icons/lu";
import GooeyNav from "../GooeyNav";
import { motion } from "framer-motion";

interface GooeyNavItem {
  label: string;
  href: string;
}

const navbarLinks: GooeyNavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = memo(function () {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    if (y < 600) setActiveIndex(0);
    else if (y < 1100) setActiveIndex(1);
    else if (y < 1800) setActiveIndex(2);
    else if (y < 2600) setActiveIndex(3);
    else setActiveIndex(4);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
        className="
          fixed top-0 left-0 right-0 z-50
          bg-[#0d1117]/40 backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="h-[4.5rem] flex items-center justify-between px-6! md:px-20!">
          <img
            src={img}
            className="w-32 md:w-36 h-auto"
            alt="logo"
            loading="eager"
          />
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center h-full">
              <GooeyNav
                items={navbarLinks}
                particleCount={10}
                particleDistances={[60, 10]}
                particleR={70}
                activeIndex={activeIndex}
                animationTime={450}
                timeVariance={250}
                colors={[1, 2, 3, 2, 3]}
              />
            </nav>
            <div className="flex md:hidden">
              {isOpen ? (
                <LuPanelTopClose
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-[var(--first-color)]"
                />
              ) : (
                <LuPanelBottomClose
                  onClick={() => setIsOpen(true)}
                  className="text-3xl text-[var(--first-color)]"
                />
              )}
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <nav
        className={`
          fixed top-[4.5rem] left-0 w-full
          bg-[#0d1117]/90 backdrop-blur-xl
          border-b border-white/10
          flex flex-col gap-6
          p-6! z-40 md:hidden
          transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {navbarLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={() => {
              setActiveIndex(index);
              setIsOpen(false);
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
              text-lg tracking-wide
              ${index === activeIndex
                ? "text-[var(--first-color)] font-semibold"
                : "text-white/70 hover:text-white"}
            `}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
    </>
  );
});

export default Navbar;
