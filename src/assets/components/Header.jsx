import { useState } from "react";

const Header = ({ activeSection, sticky }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <a href="#" className="logo">
        Portfolio
      </a>

      <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a
          href="#resume"
          className={activeSection === "resume" ? "active" : ""}
        >
          Resume
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
