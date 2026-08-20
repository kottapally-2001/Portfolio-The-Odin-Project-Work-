import React from "react";

function Skills() {
  const skills = [
  // Languages
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",

  // Frontend
  "React",

  // Backend
  "Node.js",
  "Express.js",
  "NestJS",
  "REST APIs",
  "Socket.IO",
  "JWT Authentication",

  // Databases & ORM
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma ORM",
  "TypeORM",

  // AI & Machine Learning
  "AI / GenAI",
  "LangChain",
  "RAG",
  "Ollama",
  "ChromaDB",
  "Vector Databases",

  // Cloud & DevOps
  "AWS",
  "Docker",
  "Linux",

  // Analytics & Visualization
  "Cube.js",
  "AWS QuickSight",

  // Tools
  "Git",
  "GitHub",
  "Postman",
  "Jira",
];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <h2 className="section-title">
          Tools & <span>Technologies</span>
        </h2>

        <p className="section-subtitle">
          Technologies I use to build scalable enterprise software,
          AI-powered applications, and cloud solutions.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;