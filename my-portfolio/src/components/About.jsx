import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>

      {/* MAIN PROFILE PIC */}
      <img
        src="./Sai.jpeg"
        alt="Sai Charan"
        className="about-profile"
      />

      {/* ABOUT TEXT */}
      <div className="about-text">
        I'm a passionate Full Stack Developer who enjoys turning ideas into
        scalable and visually appealing digital solutions. With a strong command
        of HTML, CSS, JavaScript, React, Node.js, and Express,<br /><br />
        I build responsive, high-performance web applications that balance clean
        design with robust functionality.
        <br /><br />

        On the frontend, I focus on crafting smooth, engaging user interfaces
        with modern frameworks like React, ensuring each component is optimized
        for both speed and accessibility.
        <br /><br />

        On the backend, I design secure RESTful APIs using Node.js and Express,
        integrate databases like PostgreSQL and MongoDB, and handle
        authentication, deployment, and cloud storage with tools like Prisma,
        Passport.js, and Cloudinary.
        <br /><br />

        Beyond coding, I have a deep interest in problem-solving, system
        architecture, and performance optimization. I enjoy collaborating with
        teams, following best practices in Git and agile development, and
        continuously learning new technologies that enhance both user and
        developer experience.
      </div>

      <p className="about-footer">
        My goal is to create solutions that not only work flawlessly but also
        leave a lasting impression — blending creativity, logic, and technology
        to make meaningful products that people love to use.
      </p>

      {/* PHOTO GRID */}
      <div className="about-photo-grid">
        <img src="./sai2.jpeg" alt="Sai 2" />
        <img src="./sai4.jpeg" alt="Sai 4" />
        <img src="./sai5.jpeg" alt="Sai 5" />
      </div>
      
    </section>
  );
}

export default About;
