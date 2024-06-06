import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

const Intro = () => {
  return (
    <div
      className={` font-ocr lg:max-w-[70%] h-[60vh]`}
    >
      <div className="flex  flex-col">
        <div
          className={`${styles.shadowbottom} flex justify-between p-5 shadow-white w-full md:w-full`}
        >
          <div className="ml-[5rem]">
            <div className="flex gap-2 items-baseline">
              <h1 className="text-[#d4d4d5] text-[1rem] md:text-[2rem]">
                <strong>I'm</strong>
              </h1>
              <h1
                className={`text-[#f2c979] md:text-[3rem] text-[2rem] font-ocr`}
              >
                <strong> Vaidik Chhirolya</strong>
              </h1>
            </div>
            <h1 className="text-[#d4d4d5] text-[1rem] md:text-[2rem]">
              <strong>Full Stack Web Developer</strong>
            </h1>
            <button className="mt-4 rounded-md p-2 border-2 border-[#f2c979] text-lg text-[#f2c979] items-center justify-center hover:bg-[#f2c979] hover:text-[#5a4c23]">
              <strong>Contact me</strong>
            </button>
          </div>
          <div className={`flex items-end justify-end pt-[25vh]`}>
            <div className="flex flex-col gap-4 justify-center">
              <svg width="10" height="100" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="100"
                  stroke="#e1bc73"
                  stroke-width="2"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/PERZI0N" target="_blank">
                  <FaGithub className="text-[#dfdfe0] text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaidik-chhirolya-1b8bb6168/"
                  target="_blank"
                >
                  <FaLinkedin className="text-[#dfdfe0] text-xl" />
                </a>
                <a href="https://wa.me/09753964884" target="_blank">
                  <FaWhatsapp className="text-[#dfdfe0] text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-[5rem] py-6 px-8">
          <h1
            className="pb-2 font-bold text-[2.5rem] text-[#e4e4e4]"
            id="intro"
          >
            About
          </h1>
          <div>
            <svg width="100" height="2" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                stroke="#e1bc73"
                stroke-width="2"
              />
            </svg>
            <h2 className="text-[#d4d4d5]  text-[1rem] pt-2">
              I have aquired and sharpened my development skills by working on
              various projects over a period of time. The projects included
              various tech stacks which included projects working on ReactJs,
              NextJs, RestFull API, MongoDB, NodeJs etc. Currently working as a
              full stack web developer at Japan Grab Technologies and have been
              a contributor on various projects online. I have also worked as a
              deep learning research intern at IISc banglore, where I worked
              exclusively in the field of GANs. I am{" "}
              <span className="text-[#b39f76]">
                trustworthy, creative, and an effective conmmunicator.
              </span>{" "}
              I fondly anticipate working in a challenging yet rewarding
              organisation to attain its visions for personal growth.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
