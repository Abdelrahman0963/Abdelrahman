import { useState } from "react";
import img from "../../../public/Logo/abdelrahman-high-resolution-logo-transparent.png";
import { LuPanelBottomClose } from "react-icons/lu";
import { LuPanelTopClose } from "react-icons/lu";
import { motion } from "framer-motion";
const Navbar: React.FC = function () {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navbarLinks = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="navbar sticky top-6 h-[60px] bg-[#cfe9fe27] rounded-lg w-full flex items-center z-50 "
      >
        <div className="navbar-container relative  flex items-center w-full justify-between transform duration-500">
          <div className="navbar-logo w-72 xl:!px-10 lg:!px-8 !px-5">
            <img src={img} className="w-full" alt="logo" />
          </div>

          <div className="navbar-links !px-10 hidden md:flex items-center gap-10 text-white">
            {navbarLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-300 !pb-1 ${
                  index === activeIndex
                    ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[var(--first-color)] font-bold"
                    : "text-white/70"
                }`}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>

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

      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={`origin-top transform transition-all duration-500 ease-in-out absolute top-[5rem] left-0 w-full shadow-2xl bg-[#0d1117] flex flex-col items-start gap-6 !px-6 !py-10 z-40 md:hidden ${
            isOpen
              ? "opacity-100 scale-y-100 max-h-screen"
              : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
          }`}
        >
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(false);
              }}
              className={`text-white text-lg transition-all duration-300 ${
                index === activeIndex
                  ? "font-bold text-[var(--first-color)]"
                  : ""
              }`}
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};
export default Navbar;
