import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import TextType from '../TextType';
import PixelBlast from "../PixelBlast";
import { Container } from "../ui/Container";

const Hero: React.FC = () => {
  const DownloadPDF = (): void => {
    const link = document.createElement("a");
    link.href = "/Resume/AbdelrahmanSayed-Resume.pdf";
    link.download = "AbdelrahmanSayed-Resume.pdf";
    link.click();
  };
  return (
    <>
      <section
        id="home"
        className="w-full h-[100vh] overflow-hidden bg-cover bg-center flex items-center  justify-center relative "
      >
        <div className="absolute -z-10 top-[-5rem] left-0 w-screen h-screen overflow-hidden">
          <PixelBlast
            variant="circle"
            pixelSize={8}
            color="#c498fc"
            patternScale={5}
            patternDensity={1.8}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={.5}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.5}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        <Container className="h-full flex items-center justify-center md:px-0! px-4!">
          <div className="w-full md:h-auto h-full text-white flex-col md:flex-row flex items-center justify-center md:justify-between md:!mb-0 !mb-15">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="home-content w-full "
            >
              <h2 className="xl:text-8xl lg:text-7xl text-5xl font-[var(--font-Kanit)] leading-[1.1]">
                <p className="text-[var(--first-color)]">Hi, I'm </p>
                <TextType
                  text={["Abdelrahman Sayed"]}
                  typingSpeed={100}
                  pauseDuration={1500}
                  showCursor={true}
                  loop={true}
                  className="text-white"
                />
              </h2>
              <h2 className="text-[var(--first-color)] xl:text-4xl lg:text-2xl md:text-2xl text-1xl font-[var(--font-Kanit)] md:!mt-5 !mt-3">
                Frontend Developer
              </h2>
            </motion.div>
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex  flex-col items-start md:items-center justify-end md:w-auto w-full"
            >
                <div className="md:flex w-full hidden relative">
                  <FaReact
                    size={300}
                    className="text-[var(--first-color)] md:text-4xl text-2xl !mb-15 opacity-75"
                  />
                </div>

                <div className="md:mt-3! mr-0! mt-10! w-full flex items-start justify-start">
                  <button
                    onClick={DownloadPDF}
                    className="md:relative w-[200px]  md:shadow-[0px_-10px_100px_0_#c498fc]  hover:scale-[.9] absolute left-0 inline-flex h-10 items-center justify-center !p-2 !me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br text-white from-purple-600 to-blue-500  dark:focus:ring-[#c498fc] cursor-pointer"
                  >
                    <span className="md:relative flex items-center ">
                      Resume Download
                    </span>
                  </button>
                </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Hero;
