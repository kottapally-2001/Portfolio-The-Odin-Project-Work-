import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

function Contact() {
  const contacts = [
    { icon: <FaLinkedin className="icon" />, name: "LinkedIn", link: "https://www.linkedin.com/in/saicharan-kottapally-69bb1a1a4/" },
    { icon: <FaGithub className="icon" />, name: "GitHub", link: "https://github.com/kottapally-2001" },
    { icon: <FaEnvelope className="icon" />, name: "Email", link: "mailto:saicharan.kottapally@gmail.com" },
    { icon: <FaPhone className="icon" />, name: "Mobile", link: "tel:+919154500348" },
    { icon: <FaInstagram className="icon" />, name: "Instagram", link: "https://instagram.com/yourprofile" },
    { icon: <FaWhatsapp className="icon" />, name: "WhatsApp", link: "https://wa.me/919154500348" },
  ];

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">Let's connect! Feel free to reach out via any platform below.</p>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noreferrer" className="contact-card">
            {contact.icon}
            {contact.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
