import React, { cloneElement } from "react";
import { BiSolidShow } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";

const Portfolio: React.FC = () => {
  interface projects {
    projectImage: string;
    projectName: string;
    projectLinkonGithub: string;
    projectLinkonWebsite: string;
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
      projectImage: "/Projects Images/Foton.png",
      projectName: "clone Home page",
      projectLinkonGithub:
        "https://github.com/Abdelrahman0963/task-foton-landing-Page.git",
      projectLinkonWebsite: "https://task-foton-landing-page.vercel.app/",
      projectTechnologies: ["React", "Tailwind", "Motion"],
    },
  ];

  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section  w-full h-[100%] bg-[var(--bg-color)]  relative !z-0 overflow-hidden md:!pt-20"
      >
        <div className="portfolio-section-container !p-8">
          <div className="portfolio-section-slogan">
            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full text-[var(--third-color)]">
              Portfolio
            </h2>
          </div>
          <div className="portfolio-section-container-cards !p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="portfolio-section-container-cards-card bg-[#161B22] !p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="portfolio-section-container-cards-card-image h-[200px]  hover:brightness-50  rounded-md">
                  <a href={project.projectLinkonWebsite}>
                    <img
                      loading="lazy"
                      className="w-[100%] h-[100%] object-cover rounded-md"
                      src={project.projectImage}
                      alt={project.projectName}
                    />
                  </a>
                </div>
                <div className="portfolio-section-container-cards-card-content flex flex-col items-center justify-between !p-3">
                  <div className="flex w-full  gap-2 ">
                    {project.projectTechnologies.map((tech, index) => (
                      <nav
                        key={index}
                        className="bg-[var(--bg-color)] rounded-full !p-2"
                      >
                        <p className="text-[var(--third-color)] text-[.6rem]">
                          {tech}
                        </p>
                      </nav>
                    ))}
                  </div>

                  <div className="portfolio-section-container-cards-card-titleAndIcons w-full flex items-center justify-between gap-4">
                    <h3 className="text-[var(--third-color)]">
                      {project.projectName}
                    </h3>
                    <div className="portfolio-section-container-cards-card-icons flex items-center gap-4">
                      <a
                        className="w-8 h-8 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                        href={project.projectLinkonGithub}
                      >
                        {cloneElement(<FaGithubAlt />, {
                          className: "text-3xl text-[#161B22]",
                        })}
                      </a>
                      <a
                        className="w-8 h-8 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                        href={project.projectLinkonWebsite}
                      >
                        {cloneElement(<BiSolidShow />, {
                          className: "text-3xl text-[#161B22]",
                        })}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
