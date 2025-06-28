import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import BackgroundParticles from "./components/BackgroundParticles";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Header from "./sections/Header";
import Projects from "./sections/Project";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


function App() {
 useEffect(() => {
  AOS.init({
    duration: 800,  // animation speed in ms
    once: false,    // ❗ allow repeated animation on scroll
    mirror: true,
    offset: 100,   // animate when scrolling back up
  });
}, []);


  return (
    <div className="relative font-sans">
      <BackgroundParticles />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
      
    </div>
  );
} 

export default App;
