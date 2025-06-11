import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Gallery,
  StarsCanvas,
  Portfolio,
} from "./components";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Gallery /> {/* Optional if you want gallery also on homepage */}
    <Portfolio />
    <Contact />
    <StarsCanvas />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+9822790665"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            zIndex: 1000,
            textDecoration: "none",
            fontSize: "30px",
          }}
        >
          <FaWhatsapp />
        </a>

        {/* Navbar always visible */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
