import React from "react";
import { FaStar } from "react-icons/fa";

function Projects() {
  const projects = [
    {
  title: "MIYO Health Platform",
  category: "Enterprise Healthcare Platform",
  image: "/Miyo.jpg",
  featured: true,
  status: "Production",

  description:
    "Contributed as a Software Engineer at QTrams IT Solutions Pvt. Ltd. to the MIYO Health Platform, an enterprise healthcare solution serving therapists, schools, students, and administrators. Developed secure REST APIs with NestJS and PostgreSQL, optimized backend performance, implemented business modules, integrated Cube.js and AWS QuickSight analytics, and enhanced scalable healthcare workflows.",

  tech: [
    "React.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Cube.js",
    "AWS QuickSight",
    "REST APIs",
    "Prisma ORM",
    "Docker",
    "AWS"
  ],
},


    {
      title: "AI Project Management Platform",
      category: "AI Powered Collaboration",
      image: "/Ai Analytics.png",
      status: "Completed",

      description:
        "Full-stack project management platform featuring authentication, team collaboration, document intelligence, semantic search, AI chatbot, vector embeddings, and Retrieval-Augmented Generation (RAG) using LangChain and Ollama.",

      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "LangChain",
        "Ollama",
        "ChromaDB",
      ],
    },

    {
      title: "Employee AI Analytics Dashboard",
      category: "Business Intelligence",
      image: "/Employee.png",
      status: "Completed",

      description:
        "Developed an enterprise analytics dashboard with JWT authentication, RBAC, PostgreSQL, NestJS, and Gemini AI integration to generate intelligent reports, analytics, and business insights.",

      tech: [
        "NestJS",
        "PostgreSQL",
        "JWT",
        "Gemini AI",
        "RBAC",
      ],
    },

    {
      title: "Attendance Management System",
      category: "Enterprise Web Application",
      image: "/Attendence.png",
      status: "Completed",

      description:
        "Designed a complete attendance management system featuring secure authentication, dashboards, reporting, analytics, and role-based access control for educational institutions.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="section-subtitle">
          Enterprise software, AI-powered applications, and scalable
          full-stack solutions built using modern technologies.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
            >

              {project.featured && (
                <div className="featured-badge">
                  <FaStar />
                  Featured
                </div>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <div className="project-top">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;