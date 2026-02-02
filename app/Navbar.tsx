"use client";

import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-end md:pr-8 pr-3 md:pt-5 pt-3 z-50 relative text-white">
        <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full 
        bg-black/40 backdrop-blur-sm
        transition-all duration-500 ease-in-out
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      ></div>

      
      <div
        className={`fixed top-0 right-0 h-full md:w-[30%] w-[260]
        bg-white/20 backdrop-blur-xl border-l border-white/30
        shadow-2xl z-40
        transition-transform duration-600 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-8 p-8 pt-24 text-lg font-semibold text-white">
          
        
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className={` transition-all duration-800 ease-in-out hover:translate-x-2 hover:text-white/80
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className={`transition-all duration-1000 ease-in-out hover:translate-x-2 hover:text-white/80
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className={`transition-all duration-1100 ease-in-out hover:translate-x-2 hover:text-white/80
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`transition-all duration-[1300] ease-in-out hover:translate-x-2 hover:text-white/80
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
