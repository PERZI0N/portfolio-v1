import React from "react";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="py-8 my-12" id="contact">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex rounded-t-2xl bg-second items-center font-serif justify-center"
      >
        <div className="border-x-6 border border-third mr-2 md:w-[40rem] w-[25vh]" />
        <h1 className="text-third text-[1.5rem] text-center font-bold">
          Contact Me
        </h1>
        <div className="border-x-6 border border-third ml-2 w-[25vh] md:w-[40rem]" />
      </motion.div>

      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col bg-second items-center justify-center gap-[2rem] py-10"
      >
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {/* Email */}
          <motion.h1
            whileHover={{ scale: 1.05, backgroundColor: "#212229" }}
            className="bg-first p-2 rounded-xl text-third font-bold cursor-pointer"
          >
            <div className="flex gap-2">
              <MdOutlineEmail className="mt-1" /> Vaidik.chhirolya1@gmail.com
            </div>
          </motion.h1>
          {/* Phone */}
          <motion.h1
            whileHover={{ scale: 1.05, backgroundColor: "#212229" }}
            className="bg-first items-center p-2 justify-center flex py-2 rounded-xl text-third font-bold cursor-pointer"
          >
            <div className="flex gap-2">
              <MdOutlineLocalPhone className="mt-1" /> +919753964884
            </div>
          </motion.h1>
        </div>
        {/* Location */}
        <motion.h1
          whileHover={{ scale: 1.05, backgroundColor: "#212229" }}
          className="bg-first p-2 rounded-xl text-third font-bold cursor-pointer"
        >
          <div className="flex gap-2">
            <IoLocationOutline className="mt-1" /> Bangalore, India
          </div>
        </motion.h1>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex rounded-b-2xl bg-second pb-4 items-center font-serif justify-center"
      >
        <div className="border-x-8 border border-third mr-2 w-[40vh]" />
        <h1 className="text-white flex gap-3 text-[1.5rem] font-bold">
          <motion.a
            href="https://www.linkedin.com/in/vaidik-chhirolya-1b8bb6168/"
            rel="noreferrer"
            target="_blank"
            className="text-third"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/09753964884"
            className="text-third"
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="https://x.com/VaidikChhi62666"
            rel="noreferrer"
            className="text-third"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaXTwitter />
          </motion.a>
        </h1>
        <div className="bg-second border-x-8 border border-third ml-2 w-[40vh]" />
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex text-[2rem] justify-center items-center h-[20vh] text-third"
      >
        <h1 className="font-serif text-center px-4">
          “Work smart. Get things done. No nonsense.” - Susan Wojcicki
        </h1>
      </motion.div>
    </div>
  );
};

export default ContactMe;
