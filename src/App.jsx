import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas , Portfolio } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
          <Portfolio />
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
