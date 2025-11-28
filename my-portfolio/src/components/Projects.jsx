// src/components/Projects.jsx
import React, { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  // We'll use a single array of refs. We reset it on each render below.
  const projectsRef = useRef([]);

  // Categorized projects data
  const categorizedProjects = {
    "Foundations Course - HTML & CSS": [
      {
        title: "Recipe Project",
        description:
          "Built as part of The Odin Project Foundations Course. Focused on HTML, CSS layout, and responsive design.",
        github: "https://github.com/kottapally-2001/Recipe-Project",
        preview: "https://kottapally-2001.github.io/Recipe-Project/",
      },
      {
        title: "Landing Page",
        description:
          "A modern EV landing page design showcasing layout, flexbox, and CSS styling skills.",
        github: "https://github.com/kottapally-2001/EV-Page",
        preview: "https://kottapally-2001.github.io/EV-Page/",
      },
      {
        title: "Rock Paper Scissors",
        description: "JavaScript project to practice DOM manipulation and game logic.",
        github: "https://github.com/kottapally-2001/Rock-Paper-Scissor",
        preview: "",
      },
      {
        title: "Etch-a-Sketch",
        description: "Interactive grid drawing app using JavaScript and event listeners.",
        github: "https://github.com/kottapally-2001/Etch-a-Sketch",
        preview: "",
      },
      {
        title: "Calculator",
        description: "Fully functional on-screen calculator using JavaScript and CSS grid.",
        github: "https://github.com/kottapally-2001/Calculator",
        preview: "",
      },
    ],
    "Intermediate Course - HTML & CSS" : [
      {
        title: "Sign-up Form",
        description:
          "Built as part of The Odin Project Foundations Course. Focused on HTML, CSS layout, and responsive design.",
        github: "https://github.com/kottapally-2001/Sign-up-form.git",
        preview: "https://kottapally-2001.github.io/Sign-up-form/",
      },
      {
        title: "Admin Dashboard",
        description:
          "Built as part of The Odin Project Foundations Course. Focused on HTML, CSS layout, and responsive design.",
        github: "https://github.com/kottapally-2001/Admin-Dashboard.git",
        preview: "https://kottapally-2001.github.io/Admin-Dashboard/",
      },
      
    ],

    "Advanced HTML and CSS Course" : [
      {
        title: "Homepage",
        description:
          "A responsive homepage design demonstrating advanced HTML and CSS techniques.",
        github: "https://github.com/kottapally-2001/Homepage.git",
        preview: "https://kottapally-2001.github.io/Homepage/",
      },
    ],
    "JavaScript Course": [
      {
        title: "Library",
        description:
          "A simple library management app to add, remove, and track books using JavaScript classes and DOM manipulation.",
        github: "https://github.com/kottapally-2001/Library-Project.git",
        preview: "https://kottapally-2001.github.io/Library-Project/",
      },
      {
        title: "Tic Tac Toe",
        description:
          "A classic Tic Tac Toe game implemented with JavaScript, focusing on game logic and user interaction.",
        github: "https://github.com/kottapally-2001/Tic-Tac-Toe.git",
        preview: "https://kottapally-2001.github.io/Tic-Tac-Toe/",
      },
      {
        title: "Restaurant Page",
        description:
          " A multi-page restaurant website built with JavaScript to dynamically load content and enhance user experience.",
        github: "https://github.com/kottapally-2001/Restaurant-Page.git",
        preview: "https://kottapally-2001.github.io/Restaurant-Page/",
      },
      {
        title: "To-do-list",
        description:
          " A to-do list application allowing users to add, delete, and mark tasks as complete using JavaScript.",
        github: "https://github.com/kottapally-2001/To-Do-List.git",
        preview: "https://kottapally-2001.github.io/To-Do-List/",
      },
      {
        title: "Weather App",
        description:
          "A weather application that fetches and displays weather data using JavaScript and APIs.",
        github: "https://github.com/kottapally-2001/Weather-App.git",
        preview: "https://kottapally-2001.github.io/Weather-App/",
      },
      {
        title: "Recursion",
        description:
          "A project demonstrating various recursion algorithms and techniques in JavaScript.",
        github: "https://github.com/kottapally-2001/Recursion.git",
        preview: "",
      },
      {
        title: "HashMap",
        description:
          " A project implementing a HashMap data structure in JavaScript with basic operations.",
        github: "https://github.com/kottapally-2001/HashMap.git",
        preview: "",
      },
      {
        title: "Linked Lists under Common Data Structures and Algorithms",
        description:
          "A project demonstrating the implementation and operations of linked lists in JavaScript.",
        github: "https://github.com/kottapally-2001/Linked-Lists.git",
        preview: "",
      },
      {
        title: "Binary Search Trees",
        description:
          "A project demonstrating the implementation and operations of binary search trees in JavaScript.",
        github: "https://github.com/kottapally-2001/Binary-Search-Trees-BST-.git",
        preview: "",
      },
      {
        title: "Knights Travails",
        description:
          "A project implementing the Knight's Travails algorithm to find the shortest path for a knight on a chessboard.",
        github: "https://github.com/kottapally-2001/Knights-Travails.git",
        preview: "",
      },
      {
        title: "Testing Practice",
        description:
          "A collection of testing exercises and examples to improve JavaScript testing skills.",
        github: "https://github.com/kottapally-2001/Testing-Practice.git",
        preview: "",
      },
      {
        title: "Battleship Game",
        description:
          "A classic Battleship game implemented with JavaScript, focusing on game logic and user interaction.",
        github: "https://github.com/kottapally-2001/Battleship-Game.git",
        preview: "",
      },
      
    ],
    "React Course": [
      {
        title: "CV Application",
        description:
          "A CV application built with React, allowing users to create and manage their resumes dynamically.",
        github: "https://github.com/kottapally-2001/CV-Application.git",
        preview: "https://kottapally-2001.github.io/CV-Application/",
      },
      {
        title: "Memory Card",
        description:
          "A memory card game built with React, focusing on state management and user interaction.",
        github: "https://github.com/kottapally-2001/Memory-Card.git",
        preview: "https://kottapally-2001.github.io/Memory-Card/",
      },
      {
        title: "Shopping Cart",
        description:
          "A shopping cart application built with React, demonstrating state management and component interaction.",
        github: "https://github.com/kottapally-2001/Shopping-Cart.git",
        preview: "https://kottapally-2001.github.io/Shopping-Cart/",
      },
    ],
    "Node.js/Nest.js Course": [
    {
        title: "Basic Informational Site",
        description:
          "A basic informational website built with Node.js and Nest.js, providing essential information and content.",
        github: "https://github.com/kottapally-2001/Basic-Informational-Site.git",
        preview: "",
      },
       {
        title: "Mini Message Board",
        description:
          "A simple message board application built with Node.js and Nest.js, allowing users to post and view messages.",
        github: "https://github.com/kottapally-2001/Mini-Message-Board.git",
        preview: "https://mini-message-board-ashen.vercel.app/",
      },
       {
        title: "Inventory Application",
        description:
          "An inventory management application built with Node.js and Nest.js, allowing users to track and manage stock levels.",
        github: "https://github.com/kottapally-2001/Inventory-Application.git",
        preview: "",
      },
       {
        title: "Members Only [Authentication]",
        description:
          "An authentication system for a members-only area, built with Node.js and Nest.js, implementing user login and access control.",
        github: "https://github.com/kottapally-2001/-Members-Only.git",
        preview: "",
      },
       {
        title: "File Uploader",
        description:
          "A file uploading application built with Node.js and Nest.js, allowing users to upload and manage files securely.",
        github: "https://github.com/kottapally-2001/File-Uploader.git",
        preview: "",
      },
       {
        title: "Blog API",
        description:
          "A RESTful API for a blog platform, built with Node.js and Nest.js, supporting CRUD operations and user authentication.",
        github: "https://github.com/kottapally-2001/Blog-API.git",
        preview: "",
      },
       {
        title: "Where's Waldo (A Photo Tagging App)",
        description:
          "A photo tagging application inspired by the classic 'Where's Waldo' game, built with Node.js and Nest.js.",
        github: "https://github.com/kottapally-2001/Where-s-Waldo-A-Photo-Tagging-App-.git",
        preview: "",
      },
       {
        title: "Full Stack Messaging Application (Next.js)",
        description:
          "A full stack messaging application built with Next.js, featuring real-time communication and user authentication.",
        github: "https://github.com/kottapally-2001/Messaging-App-Full-Stack-Project.git",
        preview: "https://messaging-app-full-stack-project.vercel.app/login",
      },
       {
        title: "Full Stack Social Media Application [Odin Book]",
        description:
          " A full-stack social media application built with Nest.js and React as part of The Odin Project curriculum.",
        github: "https://github.com/kottapally-2001/Odin-Book-Social-Media-Site.git",
        preview: "https://odin-book-social-media-site-nn16.vercel.app/login",
      },
     ], 
    // Add more categories later: "React", "Node", "Full-Stack", etc.
  };

  // reset refs on every render to avoid stale refs
  projectsRef.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // helper to add refs
  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <p>
        Some of my favorite projects I’ve built during The Odin Project course
        and personal practice — grouped by tech stack.
      </p>

      <div className="projects-wrapper">
        {Object.entries(categorizedProjects).map(([category, projects]) => (
          <div key={category} className="project-category">
            <h3 className="category-title">{category}</h3>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  key={`${category}-${index}`}
                  className="project-card hidden"
                  ref={addToRefs}
                >
                  <header className="project-header">
                    <h4>{project.title}</h4>
                  </header>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                      >
                        <FaGithub /> <span>Code</span>
                      </a>
                    )}
                    {project.preview && (
                      <a
                        href={project.preview}
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} preview`}
                      >
                        <FaExternalLinkAlt /> <span>Preview</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
