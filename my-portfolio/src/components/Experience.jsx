import React from "react";

export default function Experience() {
  const experiences = [
    
    {
      company: "QTrams IT Solution Pvt Ltd.",
      role: "Software Engineer Trainee",
      duration: "July 2025 – Present",
      description:
        "Completed a comprehensive full-stack web development curriculum through The Odin Project, covering both frontend and backend technologies.",
    },
    {
      company: "Infoz IT Solutions",
      role: "Full Stack Developer Intern",
      duration: "April 2025 – June 2025",
      description:
        "Developing and maintaining full-stack web applications using React, Node.js, and Express. Worked on authentication systems, REST APIs, and optimized database performance using PostgreSQL and Prisma.",
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
