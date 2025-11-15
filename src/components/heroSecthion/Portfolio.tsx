import React, { cloneElement } from "react";
import { BiSolidShow } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../../server/projects";

interface projectsprops {
  projectImage: string;
  projectName: string;
  projectLinkonGithub: string;
  projectLinkonWebsite?: string;
  projectTechnologies: string[];
}
const Portfolio: React.FC = () => {

  const project: projectsprops[] = projects;

  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section w-full h-full bg-[var(--bg-color)] relative !z-0 md:!pt-20"
      >
        <div className="portfolio-section-container h-auto !py-4 md:!p-8">
          <div className="portfolio-section-slogan">
            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:w-1/2 w-full text-[var(--third-color)]">
              Portfolio
            </h2>
          </div>

          <div className="w-full h-full px-8! md:px-4 !py-4 md:!p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {project.slice(0, 3).map((project: projectsprops, index: number) => (
              <div
                key={index}
                className="overflow-hidden w-full px-4! bg-[#161B22] !p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="h-[200px] hover:brightness-50 rounded-md">
                  <Link
                    to={project.projectLinkonWebsite || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="w-[100%] h-[100%] object-cover rounded-md"
                      src={project.projectImage}
                      alt={project.projectName}
                    />
                  </Link>
                </div>

                <div className="flex flex-col items-center gap-2 p-3!">
                  <div className="flex w-full gap-2 flex-wrap">
                    {project.projectTechnologies.map((tech, index) => (
                      <nav
                        key={index}
                        className="bg-[var(--bg-color)] rounded-full flex items-center justify-center px-2! py-1!
             w-auto sm:w-auto xs:w-[30%]"
                      >
                        <p className="text-[var(--third-color)] text-[.6rem]">{tech}</p>
                      </nav>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-between gap-4">
                    <h3 className="text-[var(--third-color)]">
                      {project.projectName}
                    </h3>

                    <div className="flex items-center gap-4">
                      <Link
                        className="md:w-8 md:h-8 w-6 h-6 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                        to={project.projectLinkonGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cloneElement(<FaGithubAlt />, {
                          className: "md:text-3xl text-2xl text-[#161B22]",
                        })}
                      </Link>

                      {project.projectLinkonWebsite && (
                        <Link
                          className="md:w-8 md:h-8 w-6 h-6 p-2 bg-[var(--third-color)] rounded-full flex items-center justify-center"
                          to={project.projectLinkonWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cloneElement(<BiSolidShow />, {
                            className: "md:text-3xl text-2xl text-[#161B22]",
                          })}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav className="flex items-center justify-center md:justify-end !p-4">
            <Link
              to="/more-projects"
              className="bg-[var(--third-color)] text-white hover:text-[var(--third-color)] hover:bg-[#ec654757] p-3! rounded-md transition duration-300 ease-in-out"
            >
              <span className="font-medium">More Projects</span>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
