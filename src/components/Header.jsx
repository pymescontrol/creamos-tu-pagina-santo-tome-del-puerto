import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    window.scrollTo(0, 0); // Desplaza al inicio al cambiar de página
  }, [location]);

  // Manejar el efecto de scroll en la cabecera
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Marca / Logo */}
        <Link to="/" className="brand" aria-label="Volver a Inicio">
          <div className="logo">
            <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="24" stroke="#00F0FF" strokeWidth="2.5" className="svg-circle" />
              <path d="M22 19H29C35.0751 19 40 23.9249 40 30C40 36.0751 35.0751 41 29 41H22V19Z" fill="url(#header-fire-gradient)" className="svg-d" />
              <defs>
                <linearGradient id="header-fire-gradient" x1="22" y1="19" x2="40" y2="41" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FF9D00" />
                  <stop offset="50%" stopColor="#FF5B00" />
                  <stop offset="100%" stopColor="#FF2E00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="brand-text">
            <span className="studio-name">Daiaxme</span>
            <span className="studio-sub">Web Studio</span>
          </div>
        </Link>

        {/* Menú de Navegación de Escritorio */}
        <nav className="nav" aria-label="Navegación principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/webs-negocios">Webs para negocios</NavLink>
          <NavLink to="/restaurantes-bares">Restaurantes y bares</NavLink>
          <NavLink to="/casas-rurales">Casas rurales</NavLink>
          <NavLink to="/autonomos">Autónomos</NavLink>
          <NavLink to="/proceso">Proceso</NavLink>
          <NavLink to="/zona">Zona</NavLink>
          <NavLink to="/sobre-daiaxme">Sobre Daiaxme</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        {/* Botón de Acción Rápida (WhatsApp) */}
        <div className="header-actions">
          <a 
            href="https://wa.me/34691223199?text=Hola!%20He%20visto%20la%20web%20de%20Daiaxme%20y%20quiero%20información%20para%20mi%20negocio." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nav"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Botón de Menú Móvil Hamburguesa */}
        <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
          <div className="menu-btn-icon"></div>
        </button>
      </header>

      {/* Menú Móvil Overlay */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`} aria-label="Navegación móvil">
        <NavLink to="/" end onClick={toggleMenu}>Inicio</NavLink>
        <NavLink to="/servicios" onClick={toggleMenu}>Servicios</NavLink>
        <NavLink to="/webs-negocios" onClick={toggleMenu}>Webs para negocios</NavLink>
        <NavLink to="/restaurantes-bares" onClick={toggleMenu}>Restaurantes y bares</NavLink>
        <NavLink to="/casas-rurales" onClick={toggleMenu}>Casas rurales</NavLink>
        <NavLink to="/autonomos" onClick={toggleMenu}>Autónomos</NavLink>
        <NavLink to="/proceso" onClick={toggleMenu}>Proceso</NavLink>
        <NavLink to="/zona" onClick={toggleMenu}>Zona</NavLink>
        <NavLink to="/sobre-daiaxme" onClick={toggleMenu}>Sobre Daiaxme</NavLink>
        <NavLink to="/contacto" onClick={toggleMenu}>Contacto</NavLink>
      </nav>
    </>
  );
}
