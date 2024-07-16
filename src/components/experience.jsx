import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <div className="p-8 bg-second font-serif rounded-2xl lg:mx-[10rem] text-white" id="experience">
      <h2 className="text-3xl text-third font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        <div className="flex pb-6">
          <div>
            <span className="text-gray-200 pr-4 bg-[#57575a] rounded-tr-full rounded-br-full p-1 mx-1 ">
              2024
            </span>
          </div>
          <div>
            <div className="h-2 rounded-full p-3 bg-third" />
            <div className="border-l justify-center items-center ml-3 h-full border-white " />
          </div>
          <div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-500">Japan Grab Technologies</p>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1" />
                <p className="mt-2 text-gray-300">
                  Created Various Websites for multiple clients from various
                  fields and working on projects created by other developers and
                  learning their tech stacks to work on the code that was
                  created by other developers in order to maintaiin the existing
                  websites that are managed by the company.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-6">
          <div>
            <span className="text-gray-200 pr-4 bg-[#57575a] rounded-tr-full rounded-br-full p-1 mx-1 ">
              2022
            </span>
          </div>
          <div>
            <div className="h-2 rounded-full p-3 bg-third" />
            <div className="border-l justify-center items-center ml-3 h-full border-white " />
          </div>
          <div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold">
                Deep Learning Research Intern
              </h3>
              <p className="text-gray-500">
                Indian Institute of Science, Banglore
              </p>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1" />
                <p className="mt-2 text-gray-300">
                  Worked as a research intern at IISC banglore where we were
                  given a test case by Flipkart to work on GANs to make 3D model
                  out of limited 2D images where the object was a human in
                  different poses.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled className="mt-3 h-4 w-10 mr-1" />
                <p className="mt-2 text-gray-300">
                  Replicated the research papers on View Imputation Generative
                  Adversial Networks (VIGAN) and Human Pose Manipulation and
                  created a hybird to manipulate the human poses and bring them
                  to a common pose so that they can be used to create 3D images
                  out of the 2D models in different poses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
