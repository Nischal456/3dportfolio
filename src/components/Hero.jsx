import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png"; // Ensure this matches your file extension (.png, .jpg, or .gif)

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">

      {/* ==========================
          1. CINEMATIC BACKGROUND LAYER 
         ========================== */}
      <div className="absolute inset-0 top-0 left-0 z-0">

        {/* A. The Image (Stars/Space) */}
        <img
          src={herobg}
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />

        {/* B. The Gradient Overlay (Premium Fade) */}
        {/* This fades from transparent (top) to black (bottom) so the 3D model sits on "floor" */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
      </div>

      {/* ==========================
          2. AMBIENT GLOW ANIMATION
         ========================== */}
      {/* Living purple fog behind the text to make it pop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#915EFF] blur-[150px] opacity-20 animate-pulse" />
      </div>

      {/* ==========================
          3. MAIN CONTENT LAYER 
         ========================== */}
      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}>

        {/* DECORATIVE SIDEBAR */}
        <div className="flex flex-col justify-center items-center mt-5 pointer-events-auto">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* TEXT & BUTTONS */}
        <div className="pointer-events-auto z-20">

         {/* ULTRA PREMIUM HERO STATUS BADGE */}
<motion.div
  initial={{ opacity: 0, y: -20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 140, damping: 16 }}
  className="relative inline-flex items-center gap-3 px-5 py-2 rounded-3xl
             bg-gradient-to-r from-[#0f0f1a]/80 via-[#111827]/90 to-[#0f0f1a]/80
             border border-[#915EFF]/40 backdrop-blur-xl
             shadow-[0_0_40px_-10px_rgba(145,94,255,0.6)]
             overflow-hidden cursor-default group"
>
  {/* SHIMMER SWEEP */}
  <span className="absolute inset-0 bg-gradient-to-r 
         from-transparent via-white/10 to-transparent
         transform -translate-x-full animate-[shimmer_2.5s_infinite]" />

  {/* LIVE PULSE DOT */}
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full
           bg-emerald-400 opacity-60 animate-ping" />
    <span className="relative inline-flex h-3 w-3 rounded-full
           bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
  </span>

  {/* ICON + MICRO INTERACTION */}

  {/* TEXT */}
  <span className="text-[12px] sm:text-sm font-bold uppercase tracking-wider
         bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-400
         bg-clip-text text-transparent group-hover:animate-[pulse_1.5s_infinite]">
    Open to Work
  </span>

  {/* GLASS HIGHLIGHT */}
  <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-white/5 blur-xl animate-[pulse_slow_3s_infinite]" />
  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#915EFF]/10 blur-xl animate-[pulse_slow_4s_infinite]" />
</motion.div>



          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#915EFF] drop-shadow-[0_0_25px_rgba(145,94,255,0.8)]">Nischal Shrestha</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg leading-relaxed`}
          >
            Capturing <span className="text-[#915EFF] font-bold">Moments</span>,
            <br className="sm:block hidden" />
            <span className="text-[#915EFF] font-bold">Web Developer</span> /
            <span className="text-[#915EFF] font-bold"> Videography</span>.
          </motion.p>

          {/* PREMIUM BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Primary Button (Glowing) */}
            <a href="#contact" className="px-8 py-3 rounded-xl bg-[#915EFF] text-white font-bold shadow-[0_0_20px_rgba(145,94,255,0.4)] hover:shadow-[0_0_30px_rgba(145,94,255,0.6)] hover:scale-105 transition-all duration-300">
              Hire Me
            </a>

            {/* Secondary Button (Glass) */}
            <a href="/cv.pdf" className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              My CV
            </a>
          </motion.div>

        </div>
      </div>

      {/* ==========================
          4. 3D MODEL LAYER
         ========================== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ComputersCanvas />
      </div>

      {/* ==========================
          5. SCROLL INDICATOR
         ========================== */}
      <div
  id="scroll-indicator"
  className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-none"
>
  <a href="#about" className="pointer-events-auto group">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/30 flex justify-center items-start p-2 backdrop-blur-sm group-hover:border-secondary transition-colors duration-300">
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="w-3 h-3 rounded-full bg-[#915EFF] mb-1 shadow-[0_0_12px_#915EFF]"
      />
    </div>
  </a>

  {/* IntersectionObserver + Framer Motion inline effect */}
  <motion.div
    style={{ position: "absolute", top: 0, left: 0 }}
    initial={{ opacity: 1 }}
    animate={{
      opacity:
        typeof window !== "undefined" && document.getElementById("navbar")
          ? document.getElementById("navbar").getBoundingClientRect().top < 100
            ? 0
            : 1
          : 1,
    }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  />
</div>

    </section>
  );
};

export default Hero;