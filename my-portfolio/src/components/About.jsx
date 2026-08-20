import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaCode,
  FaServer,
  FaBrain,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="section about-section">

      <div className="container">

        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          Passionate about building scalable software, enterprise applications,
          and AI-powered solutions that create real business value.
        </p>

        <div className="about-container">

          {/* LEFT */}

          <div className="about-left">

            <img
              src="/Sai.png"
              alt="Sai Charan"
              className="about-profile"
            />

            <div className="about-details">

              <div className="detail">
                <FaBriefcase className="detail-icon" />
                <span>Software Engineer</span>
              </div>

              <div className="detail">
                <FaLaptopCode className="detail-icon" />
                <span>Full Stack Developer</span>
              </div>

              <div className="detail">
                <FaGraduationCap className="detail-icon" />
                <span>MCA Post Graduate</span>
              </div>

              <div className="detail">
                <FaMapMarkerAlt className="detail-icon" />
                <span>Hyderabad, India</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <h3>
              Software Engineer specializing in Full Stack & AI Development
            </h3>

            <p>
              I'm a Software Engineer with experience building scalable,
              enterprise-grade web applications using modern JavaScript
              technologies. I enjoy transforming business requirements into
              secure, high-performance software.
            </p>

            <p>
              Currently working on the <strong>MIYO Health Platform</strong>,
              where I develop secure REST APIs, optimize PostgreSQL databases,
              build analytics dashboards, and enhance healthcare applications
              using React.js, NestJS, Cube.js, and AWS QuickSight.
            </p>

            <p>
              I also build AI-powered applications using LangChain, RAG,
              Ollama, ChromaDB, Embeddings, and Vector Databases to create
              intelligent assistants and analytics platforms.
            </p>

            {/* Highlights */}

            <div className="highlights">

              <div className="highlight-card">
                <FaCode />
                <div>
                  <h4>Frontend</h4>
                  <p>React.js, JavaScript, TypeScript</p>
                </div>
              </div>

              <div className="highlight-card">
                <FaServer />
                <div>
                  <h4>Backend</h4>
                  <p>NestJS, Node.js, Express.js</p>
                </div>
              </div>

              <div className="highlight-card">
                <FaBrain />
                <div>
                  <h4>Artificial Intelligence</h4>
                  <p>LangChain, RAG, Ollama</p>
                </div>
              </div>

              <div className="highlight-card">
                <FaAward />
                <div>
                  <h4>Enterprise Experience</h4>
                  <p>Healthcare & Analytics Platforms</p>
                </div>
              </div>

            </div>

            {/* Statistics */}

            <div className="about-cards">

              <div className="about-card">
                <h2>1+</h2>
                <span>Years Experience</span>
              </div>

              <div className="about-card">
                <h2>25+</h2>
                <span>Projects Built</span>
              </div>

              <div className="about-card">
                <h2>10+</h2>
                <span>Technologies</span>
              </div>

              <div className="about-card">
                <h2>2+</h2>
                <span>Enterprise Apps</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;