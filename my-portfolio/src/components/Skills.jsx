import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaPython 
} from "react-icons/fa";
import { 
  SiTypescript, SiExpress, SiNestjs, SiPrisma, SiVercel, SiRender, SiRailway
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#6cc24a" /> },
    { name: "Express", icon: <SiExpress color="#333" /> },
    { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
    { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "SQL", icon: <FaDatabase color="#00758F" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "Vercel", icon: <SiVercel color="#000" /> },
    { name: "Render", icon: <SiRender color="#46E3B7" /> },
    { name: "Railway", icon: <SiRailway color="#0B0D0E" /> },
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2>Technical Skills</h2>
      <p>
        Here are the technologies and tools I use to design, develop, and deploy full-stack applications efficiently.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
