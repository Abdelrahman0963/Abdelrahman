import { motion } from "framer-motion";
import type React from "react";

const About: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className="about-section w-full h-[100%] bg-[var(--bg-color)]  relative !z-0  md:!pt-20"
      >
        <div className="about-container w-full h-auto flex md:flex-row flex-col items-center md:justify-between overflow-hidden gap-10 md:!mb-5 !mb-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="about-container-content-profile-image w-full overflow-hidden h-full md:h-auto border-2 border-[var(--second-color)] flex items-center justify-center !p-1  rounded-lg "
          >
            <img
              loading="lazy"
              className=" w-full h-auto"
              src="/Images/Porfile.jpeg"
              alt="Portrait photo of Abdelrahman Sayed, Frontend Developer"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="about-container-content flex flex-col gap-8 md:!pd-20 !pb-40"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full  text-[var(--second-color)]">
              About Me
            </h2>
            <p className="text-white/70 text-md md:text-lg lg:text-2xl font-[var(--font-Kanit)] !mt-5">
              <b className="text-[var(--second-color)]">
                I'm a passionate Frontend Developer focused on building clean,
                responsive, and user-friendly interfaces.{" "}
              </b>{" "}
              I enjoy solving real-world problems with modern tools and API
              integration, and I’m always eager to learn and grow in this
              ever-evolving field.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
