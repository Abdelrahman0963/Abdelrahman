import { motion, type Variants } from "framer-motion";
import { lazy } from "react";

const PixelBlast = lazy(() => import("../PixelBlast"));

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  const DownloadPDF = (): void => {
    const link = document.createElement("a");
    link.href = "/Resume/AbdelrahmanSayed-Resume.pdf";
    link.download = "AbdelrahmanSayed-Resume.pdf";
    link.click();
  };

  const scrollToPortfolio = (): void => {
    const section = document.getElementById("portfolio");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <PixelBlast
          variant="circle"
          pixelSize={12}
          color="#8b5cf6"
          patternScale={2.5}
          patternDensity={0.8}
          pixelSizeJitter={0.2}
          speed={0.18}
          edgeFade={0.22}
          enableRipples={false}
          liquid={false}
          transparent
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl px-6! md:px-20! flex items-center justify-center"
      >
        <div className="w-full flex flex-col items-center text-center text-white gap-6 md:gap-8">

          <motion.p
            variants={item}
            className="text-[var(--first-color)] text-3xl tracking-wide"
          >
            Hi, I’m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[var(--font-Kanit)]
            text-5xl
            md:text-7xl
            xl:text-[5.5rem]
            2xl:text-[6rem]
            leading-[1.05]
            drop-shadow-xl"
          >
            Abdelrahman Sayed
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-[var(--first-color)]
            text-xl
            md:text-3xl
            xl:text-4xl
            2xl:text-5xl
            tracking-widest uppercase"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-2xl text-white/70 text-base md:text-lg leading-relaxed px-4"
          >
            I craft beautiful, responsive, and interactive web experiences with modern technologies.
            Specializing in React, TypeScript, and seamless UI design.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5"
          >
            <button
              onClick={DownloadPDF}
              className="group relative inline-flex items-center justify-center
              w-[220px] h-12 px-6 text-sm font-semibold text-white
              rounded-xl bg-gradient-to-br from-purple-600 to-blue-500
              hover:scale-[0.96] transition-all duration-300
              shadow-lg hover:shadow-purple-500/40"
            >
              Download CV
            </button>

            <button
              onClick={scrollToPortfolio}
              className="group relative inline-flex items-center justify-center
              w-[220px] h-12 px-6 text-sm font-semibold
              rounded-xl border border-white/20 text-white/90
              hover:text-white hover:border-white
              transition-all duration-300 hover:bg-white/5"
            >
              View Portfolio
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
