import React from 'react';
import { Link } from 'react-router-dom';
import FloatingCard from './FloatingCard';

export default function CTASection({ 
  title = "Si tienes un negocio en la zona, este es el momento de tener una web profesional", 
  text = "Puedo ayudarte a crear una página clara, moderna y preparada para que tus clientes te encuentren." 
}) {
  return (
    <section className="section-padding cta-section reveal visible">
      <div className="container">
        <FloatingCard glowColor="green" className="cta-box">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
          <div className="cta-actions">
            <a 
              href="https://wa.me/34691223199?text=Hola!%20Quiero%20una%20página%20web%20para%20mi%20negocio.%20¿Me%20das%20información?" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-glow-green btn-large"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="whatsapp-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Hablar por WhatsApp</span>
            </a>
            <Link to="/contacto" className="btn btn-secondary btn-large">
              <span>Pedir presupuesto</span>
            </Link>
          </div>
          <div className="cta-meta">
            <span>⚡ Respuesta en menos de 24h</span>
            <span className="separator">&middot;</span>
            <span>📍 Santo Tomé del Puerto, Segovia</span>
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}
