import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="container nav-container">

        <a href="#hero" className="logo">
          <span>SaiCharan </span> Kottapally
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <a href="#hero" onClick={closeMenu}>Home</a>

          <a href="#about" onClick={closeMenu}>About</a>

          <a href="#experience" onClick={closeMenu}>Experience</a>

          <a href="#skills" onClick={closeMenu}>Skills</a>

          <a href="#projects" onClick={closeMenu}>Projects</a>

          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="/Resume.pdf"
            download
            className="resume-btn"
            onClick={closeMenu}
          >
            <FaDownload />
            Resume
          </a>

        </nav>

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Header;