import React, { cloneElement, type JSX } from "react";
import { motion } from "framer-motion";
import { IoIosTimer, IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap, FaCss3, FaGithub, FaJs } from "react-icons/fa";
import { RiBearSmileFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs, SiReactquery, SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

const Skills: React.FC = () => {
  interface Skill {
    name: string;
    icon: JSX.Element;
  }
  const skills: Skill[] = [
    { name: "HTML", icon: <IoLogoHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "Figma", icon: <FiFigma /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <IoLogoReact /> },
    { name: "Zustand", icon: <RiBearSmileFill /> },
    { name: "React Query", icon: <SiReactquery /> },
    { name: "API", icon: <FaGear /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: " More coming soon...", icon: <IoIosTimer /> },
  ];
  return (
    <>
      <section
        id="skills"
        className="skills-section w-full h-auto  relative !z-0  md:!p-16 !p-5 "
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="skills-section-container cursor-no-drop  w-full  lg:h-full h-auto bg-[#161B22]  overflow-hidden  !p-8 rounded-md"
        >
          <div className="skills-section-slogan">
            <h1 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full  text-[var(--sixth-color)]">
              Skills
            </h1>
          </div>
          <div className="skills-section-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:!p-5 !p-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item flex items-center justify-center  gap-2 !p-5 bg-[var(--bg-color)] rounded-md"
              >
                {cloneElement(skill.icon, {
                  className: "text-4xl text-[var(--first-color)]",
                })}
                <h3 className="text-[0.8rem] md:text-[1rem] text-[var(--first-color)]">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
