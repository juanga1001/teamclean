import React from "react";
import { scroller } from "react-scroll";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  function scrollToSection(section) {
    console.log(section);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div className="App-container">
      <nav>
        <Navbar handleScroll={scrollToSection} />
      </nav>
      <main>
        <Hero handleScroll={scrollToSection} />
        <Services handleScroll={scrollToSection} />
        <HowItWorks />
        <FAQ handleScroll={scrollToSection} />
        <Contact />
      </main>
      <footer>
        <Footer handleScroll={scrollToSection} />
      </footer>
    </div>
  );
}

export default App;
