import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";
import dick from "./image.jpeg"; // Consider renaming this variable
import { Link as ScrollLink } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Intro = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className={`font-ocr`}>
      <div className="flex flex-col">
        <div
          className={`${styles.shadowbottom} flex justify-between p-5 shadow-white w-full md:w-full`}
        >
          <motion.div
            className="lg:ml-[5rem]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-2 items-baseline">
              <h1 className="text-[#d4d4d5] text-[1rem] md:text-[2rem]">
                <strong>I'm</strong>
              </h1>
              <h1 className={`text-third md:text-[3rem] text-[2rem] font-ocr`}>
                <strong> Vaidik Chhirolya</strong>
              </h1>
            </div>
            <h1 className="text-[#d4d4d5] text-[1rem] md:text-[2rem]">
              <strong>Full Stack Web Developer</strong>
            </h1>
            <div className="flex gap-4">
              <motion.button
                className="mt-4 rounded-md p-2 border-2 border-third text-lg text-third items-center justify-center hover:bg-second hover:text-fourth"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-third font-bold hover:text-fourth"
                >
                  Contact
                </ScrollLink>
              </motion.button>
              <motion.button
                className="mt-4 px-6 rounded-md p-2 border-2 border-third text-lg text-third items-center justify-center hover:bg-second hover:text-fourth"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="https://drive.google.com/file/d/1s_1hcZAptcqRNxmNRQI7-r2hr6rJ-ECr/view?usp=drive_link"
                  target="_blank"
                >
                  <strong>Resume</strong>
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            className={`flex items-end justify-end pt-[25vh]`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-4 justify-center">
              <svg width="10" height="100" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="100"
                  stroke="#B55400"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/PERZI0N"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    className="text-[#dfdfe0] text-xl hover:text-third"
                    style={{ transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaidik-chhirolya-1b8bb6168/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    className="text-[#dfdfe0] text-xl hover:text-third"
                    style={{ transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </a>
                <a
                  href="https://wa.me/09753964884"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp
                    className="text-[#dfdfe0] text-xl hover:text-third"
                    style={{ transition: "transform 0.3s" }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="py-6 md:px-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="pb-2 font-bold text-[2.5rem] text-third" id="intro">
            About
          </h1>
          <div>
            <svg width="100" height="2" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="#B55400"
                strokeWidth="2"
              />
            </svg>
            <h2 className="text-[#d4d4d5]  text-[1rem] pt-2">
              I have acquired and sharpened my development skills by working on
              various projects over a period of time. The projects included
              various tech stacks such as ReactJs, NextJs, RestFull API,
              MongoDB, and NodeJs. Currently working as a full stack web
              developer at Japan Grab Technologies and contributing to various
              projects online. I have also worked as a deep learning research
              intern at IISc Bangalore, where I worked exclusively in the field
              of GANs. I am{" "}
              <span className="text-third">
                trustworthy, creative, and an effective communicator.
              </span>
              I eagerly anticipate working in a challenging yet rewarding
              organization to attain its visions for personal growth.
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
