import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.7)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-lg'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          loading="lazy"
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[22px] font-semibold text-center mt-4'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      {/* About Paragraph */}
      <motion.p
        variants={fadeIn("", "tween", 0.1, 0.8)}
        className='mt-6 text-secondary text-[16px] max-w-3xl leading-[28px]'
      >
        Hello, everyone! <span className="text-white font-semibold">I am Nischal Shrestha</span>, an 8th-semester student at Nagarjuna College of IT. 
        My passion lies in <span className="text-white">web development</span> and <span className="text-white">graphic design</span>, where I enjoy blending creativity with technology. 
        I’m also deeply interested in <span className="text-white">photography, videography</span>, and <span className="text-white">content creation</span>, always exploring new ways to tell powerful visual stories.
      </motion.p>

      {/* Services Grid */}
      <div className='mt-16 flex flex-wrap justify-center gap-8'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
