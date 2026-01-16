import { motion, useReducedMotion } from "framer-motion";
import { lazy } from "react";

const ElectricBorder = lazy(() => import("../ElectricBorder"));

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const yValue = shouldReduceMotion ? 0 : 40;

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[var(--bg-color)] flex items-center relative overflow-hidden"
    >
      <div className="mx-auto w-full px-6! md:px-16! py-24!">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: yValue }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--second-color)]/10 blur-xl hidden md:block rounded-2xl" />

              <div className="relative">
                <div className="block md:hidden rounded-xl overflow-hidden border border-[var(--second-color)]/40">
                  <img
                    src="/Images/Porfile.jpeg"
                    alt="Portrait photo of Abdelrahman Sayed"
                    loading="lazy"
                    className="w-full max-w-sm object-cover"
                  />
                </div>

                <div className="hidden md:block">
                  <ElectricBorder
                    color="#7ee787"
                    speed={0.7}
                    chaos={0.25}
                    thickness={1.5}
                    style={{ borderRadius: 20, padding: 8 }}
                  >
                    <img
                      src="/Images/Porfile.jpeg"
                      alt="Portrait photo of Abdelrahman Sayed"
                      loading="lazy"
                      className="w-full max-w-sm rounded-xl object-cover"
                    />
                  </ElectricBorder>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: yValue }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
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
