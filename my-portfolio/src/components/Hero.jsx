import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <span className="hero-badge">
            👋 Welcome to my Portfolio
          </span>

          <h1>
            Hi, I'm <br />
            <span>Sai Charan Kottapally</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Backend Developer",
              2000,
              "AI Engineer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p>
            Software Engineer with hands-on experience in building scalable
            full-stack and AI-powered applications using React.js, NestJS,
            Node.js, Express.js, PostgreSQL, MongoDB, and modern cloud
            technologies. Passionate about clean architecture, performance,
            and exceptional user experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="/Resume.pdf"
              download
              className="btn btn-primary"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#projects"
              className="btn btn-outline"
            >
              View Projects
              <FaArrowRight />
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/kottapally-2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saicharan-kottapally-69bb1a1a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:saicharan.kottapally@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h3>1+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>25+</h3>
              <span>Projects Completed</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Technologies</span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">

          <div className="hero-image">
            <img src="/profile.png" alt="Sai Charan" />
          </div>

        <div className="tech react">⚛ React.js</div> 
        <div className="tech js">🟨 JavaScript</div>
        <div className="tech ts">🔷 TypeScript</div>
        <div className="tech nest">🟥 NestJS</div>
        <div className="tech node">🟩 Node.js</div>
        <div className="tech sql">🐘 PostgreSQL</div>
        <div className="tech ai">🤖 AI / GenAI</div>
        <div className="tech aws">☁ AWS</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;