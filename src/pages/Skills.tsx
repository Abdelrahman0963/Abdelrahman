import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { IoIosTimer, IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap, FaCss3, FaGithub, FaJs } from "react-icons/fa";
import { RiBearSmileFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs, SiReactquery, SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "CSS",
    icon: <FaCss3 className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Figma",
    icon: <FiFigma className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Framer Motion",
    icon: (
      <TbBrandFramerMotion className="text-4xl text-[var(--first-color)]" />
    ),
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "React",
    icon: <IoLogoReact className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Zustand",
    icon: <RiBearSmileFill className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "React Query",
    icon: <SiReactquery className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "API",
    icon: <FaGear className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-4xl text-[var(--first-color)]" />,
  },
  {
    name: "More coming soon...",
    icon: <IoIosTimer className="text-4xl text-[var(--first-color)]" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="skills-section w-full h-auto relative !z-0 md:!p-16 !p-5"
    >
      <div className="skills-section-container cursor-no-drop w-full lg:h-full h-auto bg-[#161B22] overflow-hidden !p-8 rounded-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full text-[var(--sixth-color)]">
          Skills
        </h1>
        <div className="skills-section-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:!p-5 !p-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="skill-item flex items-center justify-center gap-2 !p-5 bg-[var(--bg-color)] rounded-md"
            >
              {skill.icon}
              <h3 className="text-[0.8rem] md:text-[1rem] text-[var(--first-color)]">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
