import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import logo from "./logo.png"
import "../App.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex pb-8 flex-col items-center pt-4 w-full">
      <div className="flex justify-between items-center w-full px-[5rem]">
        <img src={logo} alt="logo" height={30} width={100} />
        <div className="hidden md:flex gap-8 text-xl">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500} // Adjust scroll duration (optional)
            className="text-[#525357] font-bold hover:text-white"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Contact
          </ScrollLink>
        </div>
        <div className="hidden md:flex items-center relative">
          <IoMdSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            className="p-2 pl-10 rounded bg-[#3d3e42] w-[15vh] text-white focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
        </div>
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`absolute top-full left-0 right-0 bg-[#34353a] flex flex-col items-center gap-4 p-4 transition-transform duration-300 ease-in-out ${
            menuOpen ? "h-auto" : "h-0"
          }`}
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500} // Adjust scroll duration (optional)
            className="text-[#525357] font-bold hover:text-white"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Portfolio
          </ScrollLink>

          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#525357] font-bold hover:text-white"
          >
            Contact
          </ScrollLink>
          <input
            type="text"
            className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 w-11/12"
            placeholder="Search..."
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
