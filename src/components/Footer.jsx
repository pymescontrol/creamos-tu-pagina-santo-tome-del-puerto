import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="36" height="36" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="24" stroke="#00F0FF" stroke-width="3" />
              <path d="M22 19H29C35.0751 19 40 23.9249 40 30C40 36.0751 35.0751 41 29 41H22V19Z" fill="url(#footer-fire-gradient)" />
              <defs>
                <linearGradient id="footer-fire-gradient" x1="22" y1="19" x2="40" y2="41" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FF9D00" />
                  <stop offset="100%" stop-color="#FF2E00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <strong className="footer-title">Daiaxme Web Studio</strong>
            <p className="footer-subtitle">Páginas web para negocios locales</p>
          </div>
        </div>

        <div className="footer-info">
          <h4>Ubicación</h4>
          <p>Santo Tomé del Puerto, Segovia y Sierra Norte de Madrid</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto directo</h4>
          <ul>
            <li>
              <a href="https://wa.me/34691223199?text=Hola%20Daiaxme" target="_blank" rel="noopener noreferrer">
                WhatsApp: +34 691 22 31 99
              </a>
            </li>
            <li>
              <a href="mailto:dasmesantoto@gmail.com">
                Email: dasmesantoto@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/daiaxme.web" target="_blank" rel="noopener noreferrer">
                Instagram: @daiaxme.web
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Daiaxme Web Studio. Diseñado con pasión local.</p>
        <div className="footer-legal">
          <Link to="/">Inicio</Link> &middot; <Link to="/servicios">Servicios</Link> &middot; <Link to="/zona">Zona</Link> &middot; <Link to="/sobre-daiaxme">Sobre Daiaxme</Link> &middot; <Link to="/contacto">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
