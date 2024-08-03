import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./projectCard";
import "./embla.css";

const projects = [
  {
    name: "IQSPL",
    link: "https://www.iqspl.com/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Flask, Tailwind, FireBase Auth, Restful",
    image: "./logo.png",
  },
  {
    name: "Youtube Clone",
    link: "https://stirring-twilight-bfdfe2.netlify.app/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Rapid API, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "Stock Portfolio",
    link: "https://github.com/PERZI0N/nextStocks",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "NextJS, Flask, MongoDB, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "BSR Lawfirm",
    link: "https://bsrlawfirm.in/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Astro, Bootstrap",
    image: "../assets/projects/github.png",
  },
  {
    name: "3D portfolio",
    link: "https://64ec957921896e0aa3b82aff--meek-babka-7e7f96.netlify.app/",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Three JS, Bootstrap",
    image: "../assets/projects/github.png",
  },
  {
    name: "CSMT",
    link: "",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "Next  consult",
    link: "",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "React, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "Fake ID detection",
    link: "https://github.com/PERZI0N/Police",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "NextJS, Google oauth, Tailwind, MetaAPI",
    image: "../assets/projects/github.png",
  },
  {
    name: "AlphaAR",
    link: "https://github.com/PERZI0N/AlphaAR",
    point1: "Created a website for a client ",
    point2: "sample",
    stack: "ARJS, HTML, CSS",
    image: "../assets/projects/github.png",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 2000 })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const goToSlide = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="m-4 sm:m-8 font-serif flex flex-col gap-6" id="portfolio">
      <h1 className="text-third text-2xl sm:text-[2rem] pl-4 sm:pl-8 items-center justify-center">
        PORTFOLIO
      </h1>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => (
              <div className="embla__slide" key={index}>
                <ProjectCard
                  name={project.name}
                  link={project.link}
                  point1={project.point1}
                  point2={project.point2}
                  stack={project.stack}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots flex justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${
              index === selectedIndex ? "is-selected" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {projects.length > 3 && (
        <button
          onClick={toggleShowAll}
          className="mt-4 rounded-md p-2 border-2 border-third text-lg text-[#f2c979] items-center justify-center hover:bg-[#f2c979] hover:text-[#5a4c23] w-40 mx-auto"
        >
          {showAll ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Portfolio;