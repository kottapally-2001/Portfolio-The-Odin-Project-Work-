import React, { useEffect, useRef, useState } from "react";
import "../style.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the hero is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className={`hero-content ${visible ? "fade-in" : ""}`}>
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Sai Charan Kottapally</span>
          </h1>
          <h3>Full Stack Developer | Problem Solver | Tech Enthusiast</h3>
          <p>
            I love creating clean, modern, and responsive web apps using React,
            Node.js, and Express. Passionate about building scalable backend systems and sleek frontend UIs.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
        <div className="hero-img">
          <img src="./profile.jpg" alt="Sai Charan" />
        </div>
      </div>
    </section>
  );
}
