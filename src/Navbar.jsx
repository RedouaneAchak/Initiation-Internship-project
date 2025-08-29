import "./Navbar.css";
import logo from "./logo.png";

import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 150); // you can change the 80 to trigger sooner or later
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Noor Power Service</h1>
      </div>
      <div className="options">
        <a
          className="navbar-options"
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
        >
          Accueil
        </a>
        <a
          className="navbar-options"
          href="#about-us"
          onClick={(e) => handleScroll(e, 'about-us')}
        >
          À propos de nous
        </a>
        <a
          className="navbar-options"
          href="#services"
          onClick={(e) => handleScroll(e, 'services')}
        >
          Services
        </a>
        <a
          className="navbar-options"
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
        >
          Contactez-nous
        </a>
      </div>
    </div>
  );
}
