import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function Home() {
  const [webModernTitle, setWebModernTitle] = useState('Web moderna');

  useEffect(() => {
    let active = true;
    // Publicado junto a la web: los cambios de datos no necesitan recompilar React.
    fetch(`${import.meta.env.BASE_URL}control-de-web.json`, { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error('Datos de la web no disponibles');
        return response.json();
      })
      .then(data => {
        const title = data?.home?.webModernTitle;
        if (active && typeof title === 'string' && title.trim().length > 0 && title.length <= 80) {
          setWebModernTitle(title.trim());
        }
      })
      .catch(() => {}); // Si hay un error mantenemos el texto habitual.
    return () => { active = false; };
  }, []);

  const cardsData = [
    { title: webModernTitle, desc: "Diseño elegante y adaptado a las últimas tendencias estéticas.", color: "green" },
    { title: "Contacto directo", desc: "Botones para que el cliente llame o mande un WhatsApp en un clic.", color: "blue" },
    { title: "Diseño móvil", desc: "Pensado para smartphones, desde donde busca el 90% de la gente.", color: "amber" },
    { title: "Imagen profesional", desc: "Transmite la confianza y seriedad que tu negocio realmente tiene.", color: "green" },
    { title: "Negocios locales", desc: "Orientado a las necesidades de autónomos y pymes de pueblo.", color: "blue" },
    { title: "Presencia en Google", desc: "Preparado para aparecer cuando busquen tus servicios en la comarca.", color: "amber" }
  ];

  return (
    <>
      <Hero />
      
      {/* Sección problema inicial */}
      <section className="section-padding reveal visible">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-amber">La Realidad Digital</span>
            <h2 className="section-title">El boca a boca ya no es suficiente</h2>
            <p className="section-subtitle" style={{ maxWidth: '900px', margin: '0 auto' }}>
              Muchos negocios de la zona siguen dependiendo solo del boca a boca. Pero hoy la gente busca en el móvil antes de llamar, reservar o acercarse. Si tu negocio no aparece bien o no transmite confianza, el cliente puede acabar eligiendo otra opción.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {cardsData.map((card, idx) => (
              <FloatingCard key={idx} glowColor={card.color}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sección intermedia sobre la propuesta local */}
      <section className="section-padding reveal visible" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="section-badge badge-green">Compromiso Comarcal</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Los negocios de los pueblos también merecen webs profesionales</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              No hace falta irse a Madrid, Segovia o Aranda de Duero para tener una web de nivel. Trabajo desde Santo Tomé del Puerto para estar cerca de tu negocio, poder tomar un café en persona y diseñar una solución real que te consiga clientes.
              <br/><br/>
              <Link to="/diseno-web-santo-tome-del-puerto" style={{ color: 'var(--green-neon)', textDecoration: 'none', fontSize: '14px' }}>&rarr; Saber más sobre mi trabajo en Santo Tomé del Puerto</Link>
            </p>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>✓</span>
                <span>Atención cara a cara, sin teleoperadores ni esperas.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>✓</span>
                <span>Diseño que transmite confianza y seriedad al instante.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>✓</span>
                <span>Precios honestos y adaptados a la comarca.</span>
              </div>
            </div>
          </div>
          <div>
            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>¿Hablamos en persona?</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Me desplazo por Santo Tomé del Puerto, Riaza, Ayllón, Buitrago de Lozoya, la Sierra Norte, Sepúlveda, Prádena y pueblos cercanos para entender tu negocio de cerca.
              </p>
              <Link to="/contacto" className="btn btn-primary btn-glow-green btn-full">
                <span>Contactar ahora</span>
              </Link>
            </FloatingCard>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
