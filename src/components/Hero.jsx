import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.gif";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      delay,
    },
  }),
};

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-0"></div>

      {/* Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 z-10`}
      >
        {/* Side line */}
        <div className="flex flex-col items-center mt-5 sm:mt-10">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Hero Text */}
        <div className="text-center sm:text-left mt-5 sm:mt-10">
          <motion.h1
            className={`${styles.heroHeadText} text-white drop-shadow-lg`}
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={textVariant}
          >
            Hi, I'm <span className="text-[#915EFF]">Nischal Shrestha</span>
          </motion.h1>

          <motion.p
            className={`${styles.heroSubText} mt-4 text-white-100 leading-relaxed`}
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={textVariant}
          >
            Capturing Moments,<br className="hidden sm:block" />
          </motion.p>

          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={textVariant}
          >
            Web Developer / Videographer / Photographer
          </motion.p>
        </div>
      </div>

      {/* Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 shadow-md hover:scale-105 transition-transform duration-300">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
