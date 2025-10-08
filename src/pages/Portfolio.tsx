import React, { cloneElement } from "react";
import { BiSolidShow } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Portfolio: React.FC = () => {
  interface projects {
    projectImage: string;
    projectName: string;
    projectLinkonGithub: string;
    projectLinkonWebsite?: string;
    projectTechnologies: string[];
  }

  const projects: projects[] = [
    {
      projectImage: "/Projects Images/instagram.png",
      projectName: "Instagram Donwloader",
      projectLinkonGithub:
        "https://github.com/Abdelrahman0963/Video-Downloader.git",
      projectLinkonWebsite:
        "https://abdelrahman0963.github.io/Video-Downloader/",
      projectTechnologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      projectImage: "/Projects Images/Crud.png",
      projectName: "CRUD Operation",
      projectLinkonGithub:
        "https://github.com/Abdelrahman0963/CRUD-Operation--System.git",
      projectLinkonWebsite:
        "https://abdelrahman0963.github.io/CRUD-Operation--System/",
      projectTechnologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      projectImage: "/Projects Images/Bay3.png",
      projectName: "Bay3",
      projectLinkonGithub:
        "https://github.com/Abdelrahman0963/E-commerce-Bay3.git",
      projectTechnologies: ["Next.js", "zustand", "React Query", "Tailwind"],
    }
  ];

  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section  w-full h-full bg-[var(--bg-color)]  relative !z-0  md:!pt-20"
      >
        <div className="portfolio-section-container h-auto !py-4  md:!p-8">
          <div className="portfolio-section-slogan">
            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full text-[var(--third-color)]">
              Portfolio
            </h2>
          </div>
          <div className="w-full h-full !py-4 md:!p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="overflow-hidden w-fit md:w-full bg-[#161B22] !p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="h-[200px]  hover:brightness-50  rounded-md">
                  <a href={project.projectLinkonWebsite}>
                    <img
                      loading="lazy"
                      className="w-[100%] h-[100%] object-cover rounded-md"
                      src={project.projectImage}
                      alt="Screenshot of Instagram Downloader web app"
                    />
                  </a>
                </div>
                <div className="flex flex-col items-center justify-between !p-3">
                  <div className="flex w-full  gap-2 ">
                    {project.projectTechnologies.map((tech, index) => (
                      <nav
                        key={index}
                        className="bg-[var(--bg-color)] rounded-full text-wrap !p-2"
                      >
                        <p className="text-[var(--third-color)] text-[.6rem]">
                          {tech}
                        </p>
                      </nav>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-between gap-4">
                    <h3 className="text-[var(--third-color)]">
                      {project.projectName}
                    </h3>
                    <div className="flex items-center gap-4">
                      <a
                        className="md:w-8 md:h-8 w-6 h-6 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                        href={project.projectLinkonGithub}
                      >
                        {cloneElement(<FaGithubAlt />, {
                          className: "md:text-3xl text-2xl text-[#161B22]",
                        })}
                      </a>
                      {project.projectLinkonWebsite && <a
                        className="md:w-8 md:h-8  w-6 h-6 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                        href={project.projectLinkonWebsite}
                      >
                        {cloneElement(<BiSolidShow />, {
                          className: "md:text-3xl text-2xl text-[#161B22]",
                        })}
                      </a>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
