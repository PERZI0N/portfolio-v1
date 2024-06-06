import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const ContactMe = () => {
  return (
    <div className=" py-8 my-12" id="contact">
      <div className="flex bg-[#f2ca78] items-center font-serif justify-center">
        <div className=" border-x-8 border border-black mr-2 md:w-[40rem] w-[25vh]" />
        <h1 className="text-black text-[1.5rem]  font-bold">Contact Me</h1>
        <div className=" border-x-8 border border-black ml-2 w-[25vh] md:w-[40rem]" />
      </div>
      <div className="flex flex-col bg-[#f2ca78] items-center justify-center gap-[2rem] py-10">
        <div className="flex gap-[2rem]">
          <h1 className="bg-[#32333a] p-2 rounded-xl text-[#b9a66c] font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <MdOutlineEmail className="mt-1" /> Vaidik.chhirolya1@gmail.com
            </div>
          </h1>
          <h1 className="bg-[#32333a] p-2 rounded-xl text-[#b9a66c] font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <MdOutlineLocalPhone className="mt-1" /> +919753964884
            </div>
          </h1>
        </div>
        <div className="bg-[#f2ca78]">
          <h1 className="bg-[#32333a] p-2 rounded-xl text-[#b9a66c] font-bold hover:bg-[#212229]">
            <div className="flex gap-2">
              <IoLocationOutline className="mt-1" /> Banglore, India
            </div>
          </h1>{" "}
        </div>
      </div>
      <div className="flex bg-[#f2ca78] pb-4 items-center font-serif justify-center">
        <div className=" border-x-8 border border-black mr-2 w-[40vh]" />
        <h1 className="text-white flex gap-3 text-[1.5rem] font-bold">
          <a
            href="https://www.linkedin.com/in/vaidik-chhirolya-1b8bb6168/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://wa.me/09753964884" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://x.com/VaidikChhi62666" target="_blank">
            <FaXTwitter />
          </a>
        </h1>
        <div className="bg-[#f2ca78]  border-x-8 border border-black ml-2  w-[40vh]" />
      </div>
      <div className="flex text-[3rem] justify-center items-center h-[20vh] text-[#d9b973]">
        <h1>"Thank You for scrolling"</h1>
      </div>
    </div>
  );
};

export default ContactMe;
