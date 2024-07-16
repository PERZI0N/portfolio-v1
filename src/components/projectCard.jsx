import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

const ProjectCard = ({ name, link, point1, point2, stack, image }) => {
  return (
    <div className="flex flex-col max-w-xs rounded-lg overflow-hidden shadow-lg bg-secondary text-white">
      <img
        src={image}
        alt={`${name} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-third text-xl font-semibold">{name}</h1>
        <div className="flex items-center gap-2 text-[#b0b0b2]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {name}
          </a>
          <MdArrowOutward />
        </div>
        <div className="text-white mt-2 mb-4">{stack}</div>
        <div className="flex text-[#e4e4e4] mb-2">
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
