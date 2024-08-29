import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./projectCard";
import "./embla.css";

const projects = [
  {
    name: "Event Management System",
    link: "https://github.com/PERZI0N/eventBooking",
    point1:
      "Created a full stack event management system to allow people to book tickets and do all the CRUD operations to it.",
    point2:
      "The app uses MongoDB to store all the data and the whole app follows the MVC architecture.",
    stack: "React, Node, Tailwind, FireBase Auth, Restful",
    image: "./github.png",
  },
  {
    name: "IQSPL",
    link: "https://www.iqspl.com/",
    point1:
      "Developed the complete website for Intelligent Quotient System Pvt Ltd.",
    point2:
      "Utilized a diverse tech stack to ensure maximum responsiveness and simplicity in design.",
    stack: "React, Flask, Tailwind, FireBase Auth, Restful",
    image: "./logo.png",
  },
  {
    name: "Youtube Clone",
    link: "https://stirring-twilight-bfdfe2.netlify.app/",
    point1:
      "Created a YouTube clone as a project to gain proficiency with Rapid API.",
    point2:
      "Implemented best practices to achieve a responsive and fast-loading website.",
    stack: "React, Rapid API, Tailwind",
    image: "./github.png",
  },
  {
    name: "Stock Portfolio",
    link: "https://github.com/PERZI0N/nextStocks",
    point1:
      "Developed a customized stock portfolio tracker using YFinance API for real-time data.",
    point2:
      "Integrated features for latest price updates, daily news, and portfolio management, adhering to proper database practices.",
    stack: "NextJS, Flask, MongoDB, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "BSR Lawfirm",
    link: "https://bsrlawfirm.in/",
    point1: "Created the landing page for a law firm.",
    point2:
      "Optimized for speed and responsiveness, ensuring seamless performance by following best practices.",
    stack: "React, Astro, Bootstrap",
    image: "../assets/projects/github.png",
  },
  {
    name: "3D Portfolio",
    link: "https://64ec957921896e0aa3b82aff--meek-babka-7e7f96.netlify.app/",
    point1:
      "Designed a portfolio using Three.js to work with 3D models and understand GLTF models.",
    point2:
      "Implemented state management practices to enhance the aesthetic quality of animations.",
    stack: "React, Three JS, Bootstrap",
    image: "../assets/projects/github.png",
  },
  {
    name: "CSMT",
    link: "",
    point1:
      "Developed a landing page for Chatrapitaji Shivaji Terminal Station upon government request.",
    point2: "Focused on creating a simple and optimized frontend.",
    stack: "React, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "Next Consult",
    link: "",
    point1: "Created the landing page for a consulting firm.",
    point2:
      "Ensured a fast, responsive, and optimized website by following best practices.",
    stack: "React, Tailwind",
    image: "../assets/projects/github.png",
  },
  {
    name: "Fake ID Detection",
    link: "https://github.com/PERZI0N/Police",
    point1:
      "Developed a solution using Google Auth and Next.js integrated with a machine learning model to identify fake Instagram accounts.",
    point2:
      "Followed best practices in Next.js for proper routing while maintaining lightweight performance.",
    stack: "NextJS, Google OAuth, Tailwind, MetaAPI",
    image: "../assets/projects/github.png",
  },
  {
    name: "AlphaAR",
    link: "https://github.com/PERZI0N/AlphaAR",
    point1:
      "Pioneered the creation of AlphaAR to assist young dyslexic children in learning and practicing English phonetics.",
    point2:
      "Officially published in IEEE Xplore at the IConscEPT conference 2024.",
    stack: "ARJS, HTML, CSS",
    image: "../assets/projects/github.png",
  },
];


const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 3500 })]
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


  return (
    <div className="m-4 sm:m-8 py-[4rem] font-serif flex flex-col gap-6" id="portfolio">
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
    </div>
  );
};

export default Portfolio;
