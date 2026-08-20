import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";

function Footer() {
  return (
    <section id="contact" className="section contact-section">

      <footer className="footer">

        <div className="container">

          <div className="footer-card">

            <span className="footer-tag">
              CONTACT
            </span>

            <h2>
              Let's Build <span>Something Amazing</span>
            </h2>

            <p>
              Passionate about building scalable backend systems,
              enterprise applications, AI-powered products,
              and cloud-native solutions.
              I'm always excited to collaborate on meaningful projects.
            </p>

            <div className="footer-buttons">

              <a
                href="mailto:saicharan.kottapally@gmail.com"
                className="footer-btn"
              >
                <FaEnvelope />
                Email Me
              </a>

              <a
                href="tel:+919154500348"
                className="footer-btn"
              >
                <FaPhone />
                Call Me
              </a>

              <a
                href="https://github.com/kottapally-2001"
                target="_blank"
                rel="noreferrer"
                className="footer-btn"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saicharan-kottapally-69bb1a1a4"
                target="_blank"
                rel="noreferrer"
                className="footer-btn"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Sai Charan Kottapally • Software Engineer • Design. Develop. Deliver.
          </div>

        </div>

      </footer>

    </section>
  );
}

export default Footer;