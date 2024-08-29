import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

const ProjectCard = ({ name, link, point1, point2, stack, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log(image)

  return (
    <div className="flex flex-col w-full h-full rounded-lg overflow-hidden shadow-lg bg-second text-fourth transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      {!imageLoaded && (
        <div className="w-full h-48 bg-gray-300 animate-pulse" />
      )}
      <img
        src={image}
        alt={`${name} screenshot`}
        className={`w-full h-48 object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.target.src = "/fallback-image.png";
        }}
      />
      <div className="p-4">
        <h1 className="text-third text-xl font-semibold animate-fadeIn">
          {name}
        </h1>
        <div className="flex items-center gap-2 text-[#b0b0b2] animate-fadeIn">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white break-all"
          >
            {name}
          </a>
          <MdArrowOutward className="transition-transform transform hover:rotate-45 duration-300" />
        </div>
        <div className="text-white mt-2 mb-4 break-words animate-fadeIn">
          {stack}
        </div>
        <div className="flex text-[#e4e4e4] mb-2 animate-fadeIn">
          <TbPointFilled className="mt-1 mr-1" />
          <p className="break-words">{point1}</p>
        </div>
        <div className="flex text-[#e4e4e4] animate-fadeIn">
          <TbPointFilled className="mt-1 mr-1" />
          <p className="break-words">{point2}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
