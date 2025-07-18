import { useState, useEffect } from "react";
import Header from "./assets/components/Header.jsx";
import Home from "./assets/components/Home.jsx";
import Resume from "./assets/components/Resume.jsx";
import Services from "./assets/components/Services.jsx";
import Portfolio from "./assets/components/Portfolio.jsx";
import Contact from "./assets/components/Contact.jsx";
import Footer from "./assets/components/Footer.jsx";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header logic
      setStickyHeader(window.scrollY > 100);

      // Active section logic
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} sticky={stickyHeader} />
      <Home />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
