import type React from "react";
import { lazy } from "react";
import { motion } from "framer-motion";

const ElectricBorder = lazy(() => import("../ElectricBorder"));

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[var(--bg-color)] flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--second-color)]/10 blur-2xl rounded-2xl" />

              <ElectricBorder
                color="#7ee787"
                speed={1}
                chaos={0.4}
                thickness={2}
                style={{ borderRadius: 20, padding: 10 }}
              >
                <img
                  src="/Images/Porfile.jpeg"
                  alt="Portrait photo of Abdelrahman Sayed"
                  loading="lazy"
                  className="w-full max-w-sm rounded-xl object-cover relative z-10"
                />
              </ElectricBorder>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--second-color)]">
              About Me
            </h2>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-[var(--font-Kanit)]">
              <span className="text-[var(--second-color)] font-semibold">
                I'm a passionate Frontend Developer focused on building clean,
                responsive, and user-friendly interfaces.
              </span>{" "}
              I enjoy solving real-world problems using modern technologies,
              working with APIs, and constantly improving my skills to deliver
              better digital experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
