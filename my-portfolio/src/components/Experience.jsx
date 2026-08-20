import React from "react";

import experience1 from "../assets/experience1.jpeg";
import experience2 from "../assets/experience2.jpeg";
import experience3 from "../assets/experience3.jpeg";
import experience4 from "../assets/experience4.jpeg";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "QTrams IT Solutions Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Jul 2025 - Present",
      location: "Hyderabad, India",
      description: [
        "Developing enterprise healthcare applications for the MIYO Health Platform.",
        "Built scalable REST APIs using NestJS, TypeScript & PostgreSQL.",
        "Integrated Cube.js and AWS QuickSight analytics dashboards.",
        "Optimized SQL queries and API performance by improving backend architecture.",
        "Implemented authentication, RBAC and secure enterprise workflows.",
      ],
      tech: [
        "React.js",
        "javaScript",
        "Node.js",
        "Express.js",
        "NestJS",
        "PostgreSQL",
        "Cube.js",
        "AWS QuickSight",
        "Prisma",
        "MongoDB",
        "TypeScript",
        "LangChain",
        "Ollama",
        "ChromaDB",
        "Embeddings",
        "AI / GenAI",
        "Docker",
        "AWS",
        "REST APIs",
        "Git",
        "Agile",
      ],
      current: true,
    },
    {
      company: "Infoz IT Solutions",
      role: "Full Stack Developer Intern",
      duration: "Apr 2025 - Jun 2025",
      location: "Hyderabad, India",
      description: [
        "Built responsive web applications using React.js.",
        "Developed REST APIs using Express.js & Prisma.",
        "Implemented JWT authentication and CRUD modules.",
        "Worked with PostgreSQL, Git and Agile methodologies.",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript", 
        "React.js",
        "Python",
        "SQL",
    
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">

          <h2 className="section-title">Professional Experience</h2>

          <p className="section-subtitle">
            Building scalable enterprise software, cloud applications and
            AI-powered solutions with modern technologies.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-line"></div>

              <div className="timeline-circle">
                <FaBriefcase />
              </div>

              <div className="experience-layout">
                {/* Left Side */}
                <div className="experience-card">
                  <div className="experience-top">
                    <div>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>

                    {exp.current && (
                      <span className="current-badge">Current</span>
                    )}
                  </div>

                  <div className="experience-meta">
                    <span>
                      <FaCalendarAlt />
                      {exp.duration}
                    </span>

                    <span>
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="experience-list">
                    {exp.description.map((item, i) => (
                      <li key={i}>
                        <FaCheckCircle />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {exp.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Right Side Images */}
                <div className="experience-images">
                  {index === 0 ? (
                    <>
                      <img src={experience1} alt="QTrams 1" />
                      <img src={experience2} alt="QTrams 2" />
                    </>
                  ) : (
                    <>
                      <img src={experience3} alt="Infoz 1" />
                      <img src={experience4} alt="Infoz 2" />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;