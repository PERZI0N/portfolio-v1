import React from "react";
import { FaStar } from "react-icons/fa"; // Make sure you have this library installed
import "./skills.css"; // Import the CSS file
import express from "../assets/express.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javasvript from "../assets/javasvript.png";
import mongo from "../assets/mongo.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import ubuntu from "../assets/ubuntu.png";

const data = [
  { logo: express, name: "Express", stars: 2 },
  { logo: github, name: "Github", stars: 4 },
  { logo: html, name: "HTML & CSS", stars: 4 },
  { logo: java, name: "Java", stars: 4 },
  { logo: javasvript, name: "JavaScript", stars: 3 },
  { logo: mongo, name: "Mongo DB", stars: 3 },
  { logo: next, name: "NextJS", stars: 3 },
  { logo: node, name: "NodeJS", stars: 3 },
  { logo: python, name: "Python", stars: 4 },
  { logo: react, name: "ReactJS", stars: 5 },
  { logo: redux, name: "Redux", stars: 2 },
  { logo: ubuntu, name: "Ubuntu", stars: 3 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="skills-title pt-[2rem]">
          <strong className="text-third">My Skills</strong>
        </h1>
      </div>
      <div className="skills-grid ">
        {data.map((card) => (
          <div key={card.name} className="card shadow-sm shadow-black">
            <div className="card-inner ">
              <div className="card-front ">
                <img src={card.logo} alt={card.name} className="card-logo" />
                <h1 className="card-title font-bold">{card.name}</h1>
              </div>
              <div className="card-back">
                <h1 className="card-title">{card.name}</h1>
                <div className="card-stars">
                  {Array.from({ length: card.stars }).map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
