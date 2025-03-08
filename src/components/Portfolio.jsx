import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const projects = [
  {
    title: "Company Portfolio",
    description: "Delivering innovative solutions and exceptional service to drive success in industry/field.",
    image: "/portfolio/project1.png",
    link: "https://geckoworksnepal.com/" 
  },
  {
    title: "E-commerce Site",
    description: "Your go-to for a seamless shopping experience with quality products at great prices.",
    image: "/portfolio/project2.png",
    link: "https://stginternational.blanxer.io/"
  },
  {
    title: "Personal Portfolio",
    description: "Creating innovative, user-focused websites that deliver impactful digital experiences.",
    image: "/portfolio/project3.png",
    link: "https://simrankhadka.com.np/"
  }
];

const Portfolio = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-6 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Works
      </motion.h1>

      <motion.p 
        className="text-base sm:text-lg mb-8 block"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <b>
        Some Of My Work / Projects <br/> That I Have Done So Far 🧑🏻‍💻
        </b>
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 sm:p-8 bg-white bg-opacity-20 rounded-xl shadow-md backdrop-blur-md transition-transform transform hover:scale-105"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base">{project.description}</p>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="mt-10 bg-white bg-opacity-20 p-6 sm:p-8 rounded-xl shadow-md backdrop-blur-md w-full max-w-lg text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
            For More Projects, <br />Check Out My Instagram
          </h2>

          <a 
            href="https://www.instagram.com/nischalkography/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
              text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold shadow-lg 
              transition-transform transform hover:scale-105"
          >
            <FaInstagram className="text-2xl sm:text-3xl" /> {/* Instagram Icon */}
            Follow Me on Instagram
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
