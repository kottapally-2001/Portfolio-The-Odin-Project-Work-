import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style.css";
import Experience from "./components/Experience";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Contact />
      <footer className="footer">© Kottapally Sai Charan — All Rights Reserved</footer>
    </>
  );
}

export default App;
