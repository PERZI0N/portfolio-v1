import React from 'react'
import ProjectCard from './projectCard';

const projects = [
  {
    name: "IQSPL",
    link: "https://www.iqspl.com/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Flask, Tailwind, FireBase Auth, Restful",
  },
  {
    name: "Youtube Clone",
    link: "https://stirring-twilight-bfdfe2.netlify.app/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Rapid API, Tailwind",
  },
  {
    name: "Stock Portfolio",
    link: "https://github.com/PERZI0N/nextStocks",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "NextJS, Flask, MongoDB, Tailwind",
  },
  {
    name: "BSR Lawfirm",
    link: "https://bsrlawfirm.in/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Astro, Bootstrap",
  },
  {
    name: "3D portfolio",
    link: "https://64ec957921896e0aa3b82aff--meek-babka-7e7f96.netlify.app/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Three JS, Bootstrap",
  },
  {
    name: "CSMT",
    link: "",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Tailwind",
  },
  {
    name: "Next  consult",
    link: "",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Tailwind",
  },
  {
    name: "Fake ID detection",
    link: "https://github.com/PERZI0N/Police",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "NextJS, Google oauth, Tailwind, MetaAPI",
  },
  {
    name: "AlphaAR",
    link: "https://github.com/PERZI0N/AlphaAR",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "ARJS, HTML, CSS",
  },
];
const Portfolio = () => {
  return (
    <div className="m-8 font-serif lg:mx-[10rem] flex flex-col gap-6 " id='portfolio'>
      <h1 className="text-[#e4e4e4] text-[2rem] pl-8 items-center justify-center">
        PORTFOLIO
      </h1>
      {projects.map((project) => (
        <div>
          <ProjectCard
            name={project.name}
            link={project.link}
            point1={project.point1}
            point2={project.point2}
            stack={project.stack}
          />
        </div>
      ))}
    </div>
  );
}

export default Portfolio