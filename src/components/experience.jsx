import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      className="p-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black font-serif rounded-2xl lg:mx-[10rem] text-white"
      id="experience"
    >
      <motion.h2
        className="text-3xl text-third font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        <motion.div
          className="flex pb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-gray-200 pr-4 bg-[#57575a] rounded-tr-full rounded-br-full p-1 mx-1">
              2024
            </span>
          </div>
          <div>
            <div className="h-2 rounded-full p-3 bg-third transition-transform transform hover:scale-110" />
            <div className="border-l-2 justify-center items-center ml-3 h-full border-white" />
          </div>
          <div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold hover:text-yellow-400 transition-colors duration-300">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-500">Japan Grab Technologies</p>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1 text-yellow-500 animate-pulse" />
                <p className="mt-2 text-gray-300">
                  Created various websites for multiple clients from various
                  fields. Worked on maintaining existing websites by
                  understanding and improving codebases.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex pb-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-gray-200 pr-4 bg-[#57575a] rounded-tr-full rounded-br-full p-1 mx-1">
              2022
            </span>
          </div>
          <div>
            <div className="h-2 rounded-full p-3 bg-third transition-transform transform hover:scale-110" />
            <div className="border-l-2 justify-center items-center ml-3 h-full border-white" />
          </div>
          <div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold hover:text-yellow-400 transition-colors duration-300">
                Deep Learning Research Intern
              </h3>
              <p className="text-gray-500">
                Indian Institute of Science, Bangalore
              </p>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1 text-yellow-500 animate-pulse" />
                <p className="mt-2 text-gray-300">
                  Worked with Flipkart on creating 3D models from limited 2D
                  images using GANs and other advanced techniques.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1 text-yellow-500 animate-pulse" />
                <p className="mt-2 text-gray-300">
                  Replicated research papers on VIGAN and Human Pose
                  Manipulation, creating a hybrid model to align poses and
                  generate 3D images.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
