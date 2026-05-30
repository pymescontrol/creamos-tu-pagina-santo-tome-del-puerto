import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    town: '',
    phone: '',
    email: '',
    msg: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el subject y body del mailto
    const subject = encodeURIComponent(`Presupuesto Web Daiaxme - ${formData.business}`);
    const body = encodeURIComponent(
      `Hola Daiaxme Web Studio,\n\n` +
      `Quiero solicitar un presupuesto para mi negocio:\n\n` +
      `- Nombre: ${formData.name}\n` +
      `- Negocio / Sector: ${formData.business}\n` +
      `- Localidad: ${formData.town}\n` +
      `- Teléfono: ${formData.phone}\n` +
      `- Email: ${formData.email}\n` +
      `- Qué necesito: ${formData.msg}\n\n` +
      `Un saludo.`
    );

    setMailtoUrl(`mailto:dasmesantoto@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader 
        badge="Contacto"
        title="Cuéntame qué negocio tienes y vemos qué web necesitas"
        subtitle="Si tienes un negocio en Santo Tomé del Puerto, Riaza, Ayllón, Buitrago de Lozoya, Segovia, Aranda de Duero o pueblos cercanos, puedo ayudarte a crear una web profesional, clara y adaptada a tu cliente."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container contact-container">
          
          {/* Formulario */}
          <FloatingCard glowColor="green" className="contact-card">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre y apellidos</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Ej. Francisco David" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="business">Nombre del negocio y sector</label>
                  <input 
                    type="text" 
                    id="business" 
                    placeholder="Ej. Casa Rural El Roble / Alojamiento" 
                    value={formData.business}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="town">Localidad (Pueblo)</label>
                  <input 
                    type="text" 
                    id="town" 
                    placeholder="Ej. Riaza" 
                    value={formData.town}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono de contacto</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Ej. 600 000 000" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Ej. tuemail@ejemplo.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="msg">¿Qué necesitas para tu web?</label>
                  <textarea 
                    id="msg" 
                    rows="4" 
                    placeholder="Ej. Necesito una carta digital QR para mi restaurante y un mapa para que me encuentren..."
                    value={formData.msg}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <button type="submit" className="btn btn-primary btn-glow-green btn-full">
                    <span>Enviar consulta</span>
                  </button>
                  <a 
                    href="https://wa.me/34691223199?text=Hola!%20He%20visto%20la%20web%20de%20Daiaxme%20y%20quiero%20información%20para%20mi%20negocio." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-full"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="whatsapp-icon" style={{ marginRight: '6px' }}>
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>Hablar por WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="success-screen">
                <div className="success-icon">✓</div>
                <h2>¡Solicitud preparada!</h2>
                <p>Haz clic abajo para abrir tu aplicación de correo y enviar tu consulta automáticamente.</p>
                <a href={mailtoUrl} className="btn btn-primary btn-glow-green btn-full">
                  <span>Abrir gestor de correo</span>
                </a>
              </div>
            )}
          </FloatingCard>

          {/* Información comarcal y datos pendientes */}
          <div className="contact-info-panel">
            <FloatingCard glowColor="blue" className="info-card">
              <h4 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '14px' }}>
                📍 Atención presencial en tu local
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                También puedo acercarme en persona si tu negocio está por la zona de Santo Tomé del Puerto, Riaza, Ayllón, Buitrago de Lozoya, la Sierra Norte o pueblos cercanos.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="amber" className="info-card green-border">
              <h4 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '14px' }}>
                Datos de contacto del estudio
              </h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px', fontSize: '14px' }}>
                <li>
                  <strong style={{ display: 'block', color: 'var(--text-muted)' }}>Teléfono:</strong> 
                  <span style={{ color: '#fff' }}>+34 691 22 31 99</span>
                </li>
                <li>
                  <strong style={{ display: 'block', color: 'var(--text-muted)' }}>Email:</strong> 
                  <span style={{ color: '#fff' }}>dasmesantoto@gmail.com</span>
                </li>
                <li>
                  <strong style={{ display: 'block', color: 'var(--text-muted)' }}>WhatsApp:</strong> 
                  <span style={{ color: '#fff' }}>+34 691 22 31 99</span>
                </li>
              </ul>
            </FloatingCard>
          </div>

        </div>
      </section>
    </>
  );
}
