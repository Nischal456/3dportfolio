import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// --- SKILL PILLS CONFIG ---
const skills = [
  { name: "🚀 Web Developer", color: "text-[#915EFF]", border: "border-[#915EFF]/50", bg: "bg-[#915EFF]/10" },
  { name: "🎓 BIM Graduate", color: "text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-500/10" },
  { name: "🎨 Graphics-Designs", color: "text-pink-400", border: "border-pink-500/50", bg: "bg-pink-500/10" },
  { name: "🎥 VideoGraphy", color: "text-yellow-400", border: "border-yellow-500/50", bg: "bg-yellow-500/10" },
{ 
  name: "🎸 Playing Instruments", 
  color: "text-green-400", 
  border: "border-green-500/50", 
  bg: "bg-green-500/10" 
}

];
// --- 1. COMPACT CIRCULAR CARD (Desktop) ---
const ServiceCardDesktop = ({ index, title, icon }) => (
  <Tilt
    className='w-[220px] hidden sm:block' // COMPACT WIDTH
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.15} // Subtle glare
    scale={1.02}
    transitionSpeed={1500}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className='w-full p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent shadow-card hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] transition-shadow duration-500'
    >
      <div className='bg-[#100d25] rounded-[24px] py-6 px-4 min-h-[220px] flex justify-center items-center flex-col group relative overflow-hidden'>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px] opacity-20" />
        
        {/* --- CIRCULAR PHOTO CONTAINER --- */}
        <div className="relative mb-4">
            {/* Spinning Ring */}
            <div className="absolute inset-[-4px] rounded-full border border-[#915EFF]/20 border-t-[#915EFF] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* The Circle Box */}
            <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex justify-center items-center group-hover:bg-[#915EFF]/10 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               <motion.img
                src={icon}
                alt={title}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className='w-10 h-10 object-contain drop-shadow-md'
              />
            </div>
        </div>

        {/* Title */}
        <h3 className='text-white text-[16px] font-bold text-center tracking-wide group-hover:text-[#915EFF] transition-colors duration-300 relative z-10'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// --- 2. COMPACT MOBILE CARD ---
const ServiceCardMobile = ({ title, icon }) => (
  <div className='min-w-[140px] w-[140px] p-[1px] rounded-[20px] bg-gradient-to-br from-[#915EFF]/30 to-transparent mx-2'>
    <div className='bg-[#151030] rounded-[20px] py-4 px-2 min-h-[150px] flex justify-center items-center flex-col relative overflow-hidden'>
      
      {/* Circle Container for Mobile */}
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex justify-center items-center mb-3 shadow-inner">
         <img src={icon} alt={title} className='w-8 h-8 object-contain z-10' />
      </div>

      <h3 className='text-white text-[12px] font-bold text-center leading-tight z-10'>{title}</h3>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="relative z-0">

      {/* 1. ATMOSPHERE */}
      <motion.div 
         animate={{ opacity: [0.05, 0.1, 0.05] }}
         transition={{ duration: 5, repeat: Infinity }}
         className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#915EFF] blur-[200px] pointer-events-none" 
      />

      {/* --- HEADER --- */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#915EFF] shadow-[0_0_10px_#915EFF]"></div>
          <p className={`${styles.sectionSubText} uppercase tracking-[0.2em] text-gray-300 text-[12px] font-medium`}>
             Who am I ?
          </p>
        </div>
        <h2 className={`${styles.sectionHeadText} text-white font-black tracking-tighter`}>
          Introduction<span className="text-[#915EFF] text-[50px] animate-pulse">.</span>
        </h2>
      </motion.div>

      {/* --- BIO SECTION --- */}
      <div className="mt-8 flex flex-col lg:flex-row gap-10 items-start">
        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className="flex-1 relative"
        >
          {/* Bio Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#050816]/50 backdrop-blur-xl overflow-hidden group">
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF]/50 to-transparent blur-sm z-0"
            />
            
            <div className="relative z-10">
               <p className='text-gray-300 text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] font-light'>
                I am <span className="text-white font-bold text-[18px]">Nischal Shrestha</span>, 
                a <span className="text-[#915EFF] font-bold">BIM Graduate</span> fusing 
                <span className="text-white font-semibold"> Logic</span> with <span className="text-white font-semibold"> Art</span>.
                <br className="mt-4 block" />
                I don't just write code; I engineer <span className="text-[#915EFF] font-medium border-b border-[#915EFF]/30 pb-0.5">immersive digital experiences</span>. 
                From pixel-perfect development to cinematic storytelling, I bring a unique dual-lens perspective to every project.
              </p>
            </div>
          </div>

          {/* Skill Chips */}
          <motion.div
  className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start"
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }}
>
  {skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 140,
            damping: 12,
            delay: index * 0.05,
          },
        },
      }}
      whileHover={{
        scale: 1.08,
        y: -2, // tiny hover lift without breaking alignment
      }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative flex items-center gap-2 px-4 py-1.5 rounded-2xl
        border ${skill.border} ${skill.bg}
        backdrop-blur-xl
        shadow-[0_8px_30px_-8px_rgba(145,94,255,0.4)]
        cursor-pointer overflow-hidden
        transition-all duration-300
      `}
    >
      {/* Glow Layer */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#915EFF]/20 via-[#00CEA8]/20 to-[#915EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <span className={`relative z-10 font-semibold text-[11px] sm:text-[12px] tracking-wide
        bg-gradient-to-r from-[#915EFF] via-[#00CEA8] to-white bg-clip-text text-transparent
      `}>
        {skill.name}
      </span>
    </motion.div>
  ))}
</motion.div>

        </motion.div>
      </div>

      {/* --- DESKTOP 3D GRID (Compact) --- */}
      <div className='hidden sm:flex mt-16 flex-wrap gap-6 justify-center'>
        {services.map((service, index) => (
          <ServiceCardDesktop key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* --- MOBILE MARQUEE --- */}
      <div className="sm:hidden mt-12 relative w-full overflow-hidden -mx-4 py-4">
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-primary to-transparent z-10" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
            repeatType: "loop"
          }}
        >
          {[...services, ...services, ...services].map((service, index) => (
            <ServiceCardMobile key={`mobile-${index}`} {...service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");