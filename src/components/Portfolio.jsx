import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const projects = [
  {
    title: "Company Portfolio",
    description: "Delivering innovative solutions and exceptional service to drive success in the industry.",
    image: "/portfolio/project1.png",
    link: "https://geckoworksnepal.com/"
  },
  {
    title: "E-commerce Site",
    description: "A seamless shopping experience offering quality products at competitive prices.",
    image: "/portfolio/project2.png",
    link: "https://stginternational.com.np/"
  },
  {
    title: "Personal Portfolio",
    description: "User-focused websites that deliver impactful and engaging digital experiences.",
    image: "/portfolio/project3.png",
    link: "https://simrankhadka.com.np/"
  }
];

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

const Portfolio = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white p-6 sm:p-10"
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        variants={fadeInUp}
      >
        Featured Projects
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 mb-12 text-center max-w-2xl"
        variants={fadeInUp}
      >
        Explore a selection of my recent work, crafted with precision and creativity to solve real-world challenges.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={fadeInUp}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl transition-all duration-150 ease-out"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-150 ease-out"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Visit Site ↗</span>
            </div>
          </motion.a>

        ))}
      </motion.div>

      <motion.div
        className="mt-16 w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Want to see more?
        </h2>
        <p className="text-gray-300 mb-6">
          Follow me on Instagram for exclusive behind-the-scenes and more creative works.
        </p>
        <motion.a
          href="https://www.instagram.com/nischalkography/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
            px-6 py-3 text-white rounded-full text-lg font-semibold shadow-lg transition-transform"
        >
          <FaInstagram className="text-2xl" />
          Follow @nischalkography
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
