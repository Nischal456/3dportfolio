import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useMotionValue, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";

// --- LAZY LOADING (PERFORMANCE OPTIMIZATION) ---
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Gallery = lazy(() => import("./components/Gallery"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));

// --- 1. GPU ACCELERATED CURSOR (0 LAG) ---
// We use MotionValues instead of State to prevent React re-renders
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add Physics: The cursor follows the mouse with a "Spring" delay (smoothness)
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Directly update the motion value (No React Render = Fastest Speed)
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#915EFF] pointer-events-none z-[9999] hidden sm:block mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

// --- 2. SMOOTH SCROLL PROGRESS BAR ---
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#915EFF] via-purple-500 to-blue-500 origin-left z-[1001] shadow-[0_0_10px_#915EFF]"
      style={{ scaleX }}
    />
  );
};

// --- 3. PAGE TRANSITION ANIMATION ---
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// --- 4. SCROLL TO TOP HELPER ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- 5. LOADING SPINNER (Preloader) ---
const Preloader = () => (
  <div className="flex items-center justify-center w-full h-screen bg-black">
    <div className="relative w-24 h-24">
       <div className="absolute inset-0 rounded-full border-[4px] border-t-[#915EFF] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
       <div className="absolute inset-2 rounded-full border-[4px] border-t-transparent border-r-blue-500 border-b-transparent border-l-transparent animate-spin-slow"></div>
    </div>
  </div>
);

// --- 6. SEO HEAD CONFIG ---
const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#050816" />
  </Helmet>
);

const Home = () => (
  <PageTransition>
    <SEO 
      title="Nischal Shrestha | 3D Creative Developer" 
      description="Immersive 3D Portfolio of Nischal Shrestha - Web Developer, Videographer & Designer."
    />
    <Hero />
    <About />
    <Experience />
    <Gallery />
    <Portfolio />
    <Contact />
  </PageTransition>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary selection:bg-[#915EFF] selection:text-white overflow-x-hidden">
          <ScrollToTop />
          <CustomCursor />
          <ScrollProgress />

          <Suspense fallback={<div className="h-16 bg-transparent" />}>
            <Navbar />
          </Suspense>

          {/* AnimatePresence makes page changes fade in/out smoothly */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Suspense fallback={<Preloader />}>
                    <Home />
                  </Suspense>
                } 
              />
              <Route 
                path="/gallery" 
                element={
                  <Suspense fallback={<Preloader />}>
                    <PageTransition>
                       <SEO title="Gallery | Nischal Shrestha" description="Visual Stories & Photography" />
                       <Gallery />
                    </PageTransition>
                  </Suspense>
                } 
              />
            </Routes>
          </AnimatePresence>

          {/* STARS: Rendered ONCE outside routes for 0 Lag */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
             <Suspense fallback={null}>
                <StarsCanvas />
             </Suspense>
          </div>

          <Suspense fallback={null}>
             <Footer />
          </Suspense>

          {/* --- NEXT LEVEL WHATSAPP BUTTON --- */}
          <motion.a
            href="https://wa.me/+9822790665"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[1000] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] overflow-hidden group border-2 border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Radar Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" />
            
            <FaWhatsapp className="text-3xl text-white drop-shadow-md" />
            
            {/* Tooltip */}
            <span className="absolute right-20 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
              Let's Chat
            </span>
          </motion.a>

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;