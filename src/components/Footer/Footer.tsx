import React, { useRef, type JSX } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendFrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_tfsfsd6",
        "template_zzbball",
        formRef.current,
        "0KtvApKUgK--x6A8S"
      )
      .then(() => {
        formRef.current?.reset();
      })
      .catch((err) => console.log(err));
  };
  interface SocialLinks {
    appName: string;
    icon: JSX.Element;
    link?: string;
  }
  const SocialLinks: SocialLinks[] = [
    {
      appName: "Linkedin",
      icon: <FaLinkedin />,
      link: "www.linkedin.com/in/abdelrahman-sayed-8176082a8",
    },
    {
      appName: "Github",
      icon: <FaGithubSquare />,
      link: "https://github.com/Abdelrahman0963",
    },
    {
      appName: "abdelrahman.sayed66006@gmail.com",
      icon: <BiLogoGmail />,
    },
    {
      appName: "+20 106 237 4384",
      icon: <FaSquareWhatsapp />,
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="footer-section w-full h-auto bg-[#161B22]    md:!pt-16"
      >
        <div className="footer-container w-full md:h-auto h-full text-white flex-col md:flex-row flex gap-6 items-center justify-center md:justify-between md:!mb-0 !mb-15 !p-4 md:!p-8">
          <div className="footer-container-SocialLinks flex flex-col gap-4">
            {SocialLinks.map((link, index) => (
              <a
                key={index}
                className="flex items-center gap-2 text-[1rem] text-[var(--first-color)] cursor-pointer hover:text-[var(--sixth-color)]"
                href={link.link}
              >
                <span>{link.icon}</span>
                <h2 className="text-[1rem] md:text-[1.2rem]">{link.appName}</h2>
              </a>
            ))}
          </div>
          <div className="footer-container-contactForm flex flex-col gap-4">
            <form
              ref={formRef}
              onSubmit={sendFrom}
              className="w-full max-w-2xl mx-auto grid gap-6"
            >
              <div className="relative flex gap-4">
                <input
                  type="text"
                  name="FullName"
                  id="Name"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b-2 border-gray-500 text-[var(--third-color)] focus:outline-none focus:border-[var(--first-color)] placeholder-gray-400 py-2"
                />
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-gray-500 text-[var(--third-color)] focus:outline-none focus:border-[var(--first-color)] placeholder-gray-400 py-2"
                />
              </div>
              <div className="relative">
                <textarea
                  name="Message"
                  id="Message"
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-transparent border-b-2 border-gray-500 text-[var(--third-color)] focus:outline-none focus:border-[var(--first-color)] placeholder-gray-400 py-2 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  value="Send"
                  type="submit"
                  className="bg-[var(--first-color)] w-20 text-[#161B22] font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
