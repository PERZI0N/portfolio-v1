import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";


const ProjectCard = ({ name, link, point1, point2, stack }) => {
  return (
    <div className="flex gap-4 justify-start">
      <div className=" border-l " />
      <div className="flex flex-col p-4">
        {/* Project 1 */}
        <h1 className=" text-[#f2c979] text-[1.5rem] pb-1">{name}</h1>
        <div className="flex gap-2 text-[#b0b0b2]">
          <a href={link} target="_blank" className="">
            {name}
          </a>
          <MdArrowOutward className=" mt-1 " />
        </div>
        <div className="text-white">{stack}</div>
        <div className="flex text-[#e4e4e4]">
          <TbPointFilled className="mt-1 mr-1" />
          <p>{point1}</p>
        </div>
        <div className="flex text-[#e4e4e4]">
          <TbPointFilled className="mt-1 mr-1" />
          <p>{point2}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
