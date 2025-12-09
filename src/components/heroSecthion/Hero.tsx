import MagnetLines from '../MagnetLines';
import { lazy } from "react";

const TextType = lazy(() => import("../TextType"));
const PixelBlast = lazy(() => import("../PixelBlast"));
const Hero: React.FC = () => {
  const DownloadPDF = (): void => {
    const link = document.createElement("a");
    link.href = "/Resume/AbdelrahmanSayed-Resume.pdf";
    link.download = "AbdelrahmanSayed-Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="w-full h-[85vh] overflow-hidden bg-cover bg-center flex items-center justify-center relative"
    >

      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-70">
        <PixelBlast
          variant="circle"
          pixelSize={12}
          color="#c498fc"
          patternScale={2.5}
          patternDensity={0.8}
          pixelSizeJitter={0.2}
          speed={0.18}
          edgeFade={0.22}
          enableRipples={false}
          liquid={false}
          transparent
        />
      </div>
      <div className="w-full h-full flex items-center justify-center px-4! md:px-20!">
        <div className="w-full h-full md:h-auto text-white flex-col md:flex-row flex items-center justify-center md:justify-between md:!mb-0 !mb-10">
          <div className="home-content w-full">
            <h2 className="xl:text-8xl lg:text-7xl text-5xl font-[var(--font-Kanit)] leading-[1.1]">
              <p className="text-[var(--first-color)]">Hi, I'm</p>
              <TextType
                text={["Abdelrahman Sayed"]}
                typingSpeed={90}
                pauseDuration={1200}
                showCursor={true}
                loop={true}
                className="text-white"
              />
            </h2>

            <h2 className="text-[var(--first-color)] xl:text-4xl lg:text-2xl md:text-2xl text-xl font-[var(--font-Kanit)] md:!mt-5 !mt-3">
              Frontend Developer
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-center justify-end md:w-auto w-full">
            <div className="md:flex w-full hidden relative">

              <MagnetLines
                rows={8}
                columns={8}
                containerSize="40vmin"
                lineColor="#efefef"
                lineWidth="0.5vmin"
                lineHeight="4vmin"
                baseAngle={0}
                style={{ margin: "2rem auto" }}
              />
            </div>
            <div className="md:mt-3 mt-10">
              <button
                onClick={DownloadPDF}
                className="w-[200px] inline-flex h-10 items-center justify-center p-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br text-white from-purple-600 to-blue-500 hover:scale-[.95] duration-200"
              >
                <span className="flex items-center">Resume Download</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
