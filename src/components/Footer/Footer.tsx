import React, { useRef, type JSX } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion, useReducedMotion } from "framer-motion";

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const reduceMotion = useReducedMotion();

  const xValue = reduceMotion ? 0 : 28;
  const yValue = reduceMotion ? 0 : 28;

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
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
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => toast.error("Failed to send message"));
  };

  interface SocialLink {
    name: string;
    icon: JSX.Element;
    link: string;
  }

  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abdelrahman-sayed-8176082a8",
    },
    {
      name: "GitHub",
      icon: <FaGithubSquare />,
      link: "https://github.com/Abdelrahman0963",
    },
    {
      name: "Email",
      icon: <BiLogoGmail />,
      link: "mailto:abdelrahman.sayed66006@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: <FaSquareWhatsapp />,
      link: "https://wa.me/201062374384",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#161B22] relative overflow-hidden md:!pt-24 !pt-16"
    >
      <div className="w-full mx-auto !px-6 md:!px-16 !pb-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: yValue }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16!"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-[var(--first-color)] font-bold">
            Let’s work together
          </h2>
          <p className="text-white/60 mt-3! max-w-xl">
            Have a project in mind or just want to say hi?
            Fill the form or reach me through my social platforms.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16!">

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -xValue }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group flex items-center gap-4 text-white/70 hover:text-[var(--first-color)] transition-all"
              >
                <span className="text-3xl group-hover:scale-110 transition">
                  {link.icon}
                </span>
                <span className="text-lg">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendForm}
            initial={{ opacity: 0, x: xValue }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl grid gap-8"
          >
            <input
              type="text"
              name="FullName"
              placeholder="Your name"
              required
              className="bg-transparent border-b border-white/20 focus:border-[var(--first-color)] outline-none !py-3 text-white placeholder-white/40"
            />

            <input
              type="email"
              name="Email"
              placeholder="Your email"
              required
              className="bg-transparent border-b border-white/20 focus:border-[var(--first-color)] outline-none !py-3 text-white placeholder-white/40"
            />

            <textarea
              name="Message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="bg-transparent border-b border-white/20 focus:border-[var(--first-color)] outline-none !py-3 text-white placeholder-white/40 resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="!px-8 !py-3 rounded-xl bg-[var(--first-color)] text-[#161B22] font-semibold hover:scale-95 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 !mt-20 !pt-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Abdelrahman Sayed — All rights reserved.
        </div>

      </div>
    </section>
  );
};

export default Footer;
