import type React from "react";
import { Container } from "../ui/Container";
import { lazy } from "react";

const ElectricBorder = lazy(() => import("../ElectricBorder"));

const About: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className="w-full h-[100%] bg-[var(--bg-color)]  relative !z-0  md:!pt-20"
      >
        <Container className="h-full flex items-center justify-between !p-5 md:!p-16">
          <div className="w-full h-auto flex md:flex-row flex-col items-center md:justify-between overflow-hidden gap-10 md:!mb-5 !mb-0">
            <div
              className="w-full overflow-hidden h-full md:h-auto flex items-center justify-center !p-2"
            >
              <ElectricBorder
                color="#7ee787"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16, padding: 8 }}
              >
                <img
                  loading="lazy"
                  className=" w-full h-auto rounded-md object-cover"
                  src="/Images/Porfile.jpeg"
                  alt="Portrait photo of Abdelrahman Sayed, Frontend Developer"
                />
              </ElectricBorder>
            </div>
            <div
              className="flex flex-col gap-8 md:!pd-20 !pb-40"
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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
