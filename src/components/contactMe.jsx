import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div className=" py-8 my-12" id="contact">
      <div className="flex bg-second items-center font-serif justify-center">
        <div className=" border-x-6 border border-third mr-2 md:w-[40rem] w-[25vh]" />
        <h1 className="text-third text-[1.5rem] text-center font-bold">
          Contact Me
        </h1>
        <div className=" border-x-6 border border-third ml-2 w-[25vh] md:w-[40rem]" />
      </div>
      <div className="flex flex-col bg-second items-center justify-center gap-[2rem] py-10">
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <h1 className="bg-first p-2 rounded-xl text-third font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <MdOutlineEmail className="mt-1" /> Vaidik.chhirolya1@gmail.com
            </div>
          </h1>
          <h1 className="bg-first items-center p-2 justify-center flex py-2 rounded-xl text-third font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <MdOutlineLocalPhone className="mt-1" /> +919753964884
            </div>
          </h1>
        </div>
        <div className="bg-second">
          <h1 className="bg-first p-2 rounded-xl text-third font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <IoLocationOutline className="mt-1" /> Banglore, India
            </div>
          </h1>{" "}
        </div>
      </div>
      <div className="flex bg-second pb-4 items-center font-serif justify-center">
        <div className=" border-x-8 border border-third mr-2 w-[40vh]" />
        <h1 className="text-white flex gap-3 text-[1.5rem] font-bold">
          <a
            href="https://www.linkedin.com/in/vaidik-chhirolya-1b8bb6168/"
            rel="noreferrer"
            target="_blank"
            className="text-third"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/09753964884"
            className="text-third"
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://x.com/VaidikChhi62666"
            rel="noreferrer"
            className="text-third"
            target="_blank"
          >
            <FaXTwitter />
          </a>
        </h1>
        <div className="bg-second border-x-8 border border-third ml-2  w-[40vh]" />
      </div>
      <div className="flex  text-[3rem] justify-center items-center h-[20vh] text-third">
        <h1 className="font-serif">"Thank You for scrolling"</h1>
      </div>
    </div>
  );
};

export default ContactMe;
