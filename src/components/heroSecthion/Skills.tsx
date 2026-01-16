import React, { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  IoIosTimer,
  IoLogoHtml5,
} from "react-icons/io";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import { RiBearSmileFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  { name: "HTML", icon: <IoLogoHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Figma", icon: <FiFigma /> },
  { name: "Shadcn UI", icon: <SiShadcnui /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <IoLogoReact /> },
  { name: "Zustand", icon: <RiBearSmileFill /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "API", icon: <FaGear /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "More coming soon...", icon: <IoIosTimer /> },
];

const Skills: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const yValue = reduceMotion ? 0 : 24;

  return (
    <section id="skills" className="w-full py-20! px-5! md:px-16!">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full bg-[#161B22] rounded-2xl p-8! md:p-12! border border-white/10 shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl text-[var(--sixth-color)] mb-10!">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: yValue }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.04,
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative flex flex-col items-center justify-center
              gap-3 p-6! rounded-xl
              bg-[#0d1117]/80 backdrop-blur
              border border-white/10
              text-center cursor-default
              transition-all duration-300
              hover:border-purple-500/40 hover:shadow-purple-500/20 hover:shadow-xl"
            >
              <div className="text-4xl text-[var(--first-color)] group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <h3 className="text-sm md:text-base text-white/80 group-hover:text-white">
                {skill.name}
              </h3>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
