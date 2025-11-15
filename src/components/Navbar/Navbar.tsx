import { useState } from "react";
import img from "../../../public/Logo/logo.png";
import { LuPanelBottomClose, LuPanelTopClose } from "react-icons/lu";
import { motion } from "framer-motion";
import GooeyNav from "../GooeyNav";
import { Container } from "../ui/Container";

interface GooeyNavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = function () {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // ✔️ Array of items
  const navbarLinks: GooeyNavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="navbar container mx-auto fixed top-6 h-[60px] bg-[#0d1117] rounded-lg md:w-[95%] w-[100%] flex items-center z-50"
      >
        <div className="navbar-container relative flex items-center w-full justify-between transform duration-500">
          {/* Logo */}
          <picture className="navbar-logo overflow-hidden lg:pl-14! md:pl-4! pl-4! flex items-center w-[150px] md:w-[250px] ">
            <img src={img} className="w-full" alt="logo" />
          </picture>

          {/* Desktop Links */}
          <div className=" lg:pr-8! md:pr-4! pr-2! hidden md:flex items-center gap-10 text-white">
            <GooeyNav
              items={navbarLinks}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

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
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={`origin-top transform transition-all duration-500 fixed top-[5rem] left-0 w-full shadow-2xl bg-[#0d1117] flex flex-col items-start gap-6 !px-6 !py-10 z-40 md:hidden`}
        >
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(false);
              }}
              className={`text-white text-lg transition-all duration-300 ${index === activeIndex
                ? "font-bold text-[var(--first-color)]"
                : ""
                }`}
              href={link.href} // ✔️ Correct href
            >
              {link.label} {/* ✔️ Correct text */}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
