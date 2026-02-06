"use client";
import { Anton } from "next/font/google";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion , Variants } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// animation container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// animation for each link
const item: Variants = {
  hidden: {
    x: -40,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* top navbar */}
      <div className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-5 md:px-5 py-4">

        <h1 className={`${anton.className} text-white font-extrabold text-xl md:text-2xl`}>
          RM<span className="text-green-500">.</span>
        </h1>

        <div className="text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
        </div>

      </div>

      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full 
        bg-black/40 backdrop-blur-sm
        transition-all duration-500 ease-in-out z-50
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      ></div>

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[30%] w-[260px]
        bg-white/20 backdrop-blur-xl border-l border-white/30
        shadow-2xl z-[55]
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* animated links container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="flex flex-col gap-8 p-8 pt-24 text-lg font-semibold text-white"
        >

          <motion.a
            variants={item}
            href="#home"
            onClick={() => setOpen(false)}
            className="hover:translate-x-2 transition-all hover:text-green-500"
          >
            Home
          </motion.a>

          <motion.a
            variants={item}
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:translate-x-2 transition-all hover:text-green-500"
          >
            About
          </motion.a>

          <motion.a
            variants={item}
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:translate-x-2 transition-all hover:text-green-500"
          >
            Projects
          </motion.a>

          <motion.a
            variants={item}
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:translate-x-2 transition-all hover:text-green-500"
          >
            Contact
          </motion.a>

        </motion.div>

      </div>
    </>
  );
};

export default Navbar;
