import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  function DownloadPDF() {
    const link = document.createElement("a");
    link.href = "/Resume/AbdelrahmanResume.pdf";
    link.download = "Abdelrahman Resume.pdf";
    link.click();
  }
  return (
    <>
      <section
        style={{
          backgroundImage: `url('../../public/Images/home-pattern-1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
        id="home"
        className="home-section w-full h-[100vh] overflow-hidden bg-cover bg-center flex items-center  justify-center relative z-0 "
      >
        <div className="home-container w-full md:h-auto h-full text-white flex-col md:flex-row flex items-center justify-center md:justify-between md:!mb-0 !mb-15">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="home-content w-full "
          >
            <h2 className="xl:text-8xl lg:text-7xl text-6xl font-[var(--font-Kanit)] leading-[1.1]">
              <p className="text-[var(--first-color)]">Hi, I'm </p> Abd
              El-Rahman <p className="text-[var(--first-color)]">Sayed</p>
            </h2>
            <h2 className="text-[var(--first-color)] xl:text-4xl lg:text-2xl md:text-2xl text-1xl font-[var(--font-Kanit)] md:!mt-5 !mt-3">
              Frontend Developer
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="home-icon-resume flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="home-icon md:flex hidden"
            >
              <FaReact
                size={300}
                className="text-[var(--first-color)] md:text-4xl text-2xl !mb-15 opacity-75"
              />
            </motion.div>
            <div className="home-content-resume-btn !mt-3">
              <button
                onClick={DownloadPDF}
                className="md:relative md:shadow-[0px_-10px_100px_0_#c498fc]  hover:scale-[.9] absolute left-0 inline-flex h-10 items-center justify-center !p-2 !me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br text-white from-purple-600 to-blue-500  dark:focus:ring-[#c498fc] cursor-pointer"
              >
                <span className="md:relative flex items-center transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Resume Download
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Home;
