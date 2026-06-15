import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="36" height="36" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="26" stroke="#00F0FF" stroke-width="2" />
              <text x="30" y="32" dominantBaseline="middle" textAnchor="middle" fill="url(#footer-fire-gradient)" fontSize="34" fontWeight="900" fontFamily="sans-serif" style={{filter: 'drop-shadow(0px 0px 4px #00FF66)'}}>V</text>
              <defs>
                <linearGradient id="footer-fire-gradient" x1="15" y1="15" x2="45" y2="45" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FF9D00" />
                  <stop offset="100%" stopColor="#FF2E00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <strong className="footer-title">Villarejo Web Studio</strong>
            <p className="footer-subtitle">Páginas web para negocios locales</p>
            <p style={{fontSize: '0.75rem', color: '#64748b', marginTop: '4px'}}>Un proyecto de Francisco David</p>
          </div>
        </div>

        <div className="footer-info">
          <h4>Ubicación</h4>
          <p>Santo Tomé del Puerto, Segovia y Sierra Norte de Madrid</p>
          <p style={{ marginTop: '8px' }}>
            <Link to="/diseno-web-santo-tome-del-puerto" style={{ color: 'var(--green-neon)', textDecoration: 'none', fontSize: '0.85rem' }}>
              &rarr; Diseño web en Santo Tomé del Puerto
            </Link>
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contacto directo</h4>
          <ul>
            <li>
              <a href="https://wa.me/34691223199?text=Hola" target="_blank" rel="noopener noreferrer">
                WhatsApp: +34 691 22 31 99
              </a>
            </li>
            <li>
              <a href="mailto:dasmesantoto@gmail.com">
                Email: dasmesantoto@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/villarejo.web" target="_blank" rel="noopener noreferrer">
                Instagram: @villarejo.web
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Villarejo Web Studio. Diseñado con pasión local.</p>
        <div className="footer-legal">
          <Link to="/">Inicio</Link> &middot; <Link to="/servicios">Servicios</Link> &middot; <Link to="/zona">Zona</Link> &middot; <Link to="/sobre-nosotros">Sobre Mí</Link> &middot; <Link to="/contacto">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
