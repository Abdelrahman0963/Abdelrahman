import { projects } from "../server/projects";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { cloneElement } from "react";
interface projectsprops {
    projectImage: string;
    projectName: string;
    projectLinkonGithub?: string;
    projectLinkonWebsite?: string;
    projectTechnologies: string[];
}

const Projects = () => {
    const project: projectsprops[] = projects;
    return (
        <section className="min-h-screen flex flex-col justify-center items-start py-24! px-16!">
            <nav className="w-full text-white gap-3 h-auto flex items-center justify-start mb-8! ">
                <Link to="/" className="flex items-center gap-2 text-2xl text-[var(--third-color)] hover:text-[var(--second-color)] hover:underline " >
                    <IoIosArrowBack />
                    <span>Back to home</span>
                </Link>
                <h2 className="text-2xl ">Projects Page</h2>
            </nav>
            <div className="w-full  h-full px-8! md:px-4 !py-4 md:!p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                {project.map((project: projectsprops, index: number) => (
                    <div

                        key={index}
                        className="overflow-hidden w-full px-4! bg-[#161B22] !p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
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
                                        className="bg-[var(--bg-color)]  rounded-full text-wrap !p-2"
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
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
