import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../server/projects";

interface projectsprops {
  projectImage: string;
  projectName: string;
  projectLinkonGithub?: string;
  projectLinkonWebsite?: string;
  projectTechnologies: string[];
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Portfolio: React.FC = () => {
  const project: projectsprops[] = projects;

  return (
    <section
      id="portfolio"
      className="w-full bg-[var(--bg-color)] relative !z-0 md:!pt-24 !pb-20"
    >
      <div className="w-full mx-auto !px-6 md:!px-12">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12!"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-[var(--third-color)] font-bold">
            Selected Projects
          </h2>
          <p className="text-white/60 mt-3! max-w-xl">
            A collection of real-world interfaces built with modern frontend tools.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!"
        >
          {project.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group relative overflow-hidden rounded-2xl bg-[#161B22] border border-white/10 hover:border-purple-500/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  loading="lazy"
                  src={project.projectImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Actions */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  {project.projectLinkonWebsite && (
                    <Link
                      to={project.projectLinkonWebsite}
                      target="_blank"
                      className="flex-1 text-center !py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.projectLinkonGithub && (
                    <Link
                      to={project.projectLinkonGithub}
                      target="_blank"
                      className="flex-1 text-center !py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                    >
                      Source Code
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="!p-6 flex flex-col gap-4">
                <h3 className="text-xl text-white font-semibold">
                  {project.projectName}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.projectTechnologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs !px-3 !py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* More */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end !mt-16"
        >
          <Link
            to="/more-projects"
            className="!px-6 !py-3 rounded-xl bg-[var(--third-color)] text-white hover:bg-[#ec654757] hover:text-[var(--third-color)] transition"
          >
            More Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
