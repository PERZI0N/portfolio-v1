import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const ProjectCard = ({ name, link, point1, point2, stack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col w-full h-full rounded-lg overflow-hidden shadow-lg bg-second text-fourth transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-third"></div>

      <div className="p-6 z-10 relative">
        {/* Project Name */}
        <motion.h1
          className="text-third text-2xl font-semibold tracking-wide"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h1>

        {/* Project Link */}
        <motion.div
          className="flex items-center gap-2 mt-2 text-[#b0b0b2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline break-all"
          >
            {name}
          </a>
          <MdArrowOutward className="transition-transform transform hover:rotate-45 duration-300" />
        </motion.div>

        {/* Stack */}
        <motion.div
          className="text-white mt-3 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>{stack}</p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          className="mt-4 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, staggerChildren: 0.2 }}
        >
          <div className="flex text-[#e4e4e4] items-center">
            <TbPointFilled className="text-xl mr-2" />
            <p className="break-words">{point1}</p>
          </div>
          <div className="flex text-[#e4e4e4] items-center">
            <TbPointFilled className="text-xl mr-2" />
            <p className="break-words">{point2}</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-third"></div>
    </motion.div>
  );
};

export default ProjectCard;
