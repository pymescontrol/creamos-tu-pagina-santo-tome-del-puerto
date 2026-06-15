import React from 'react';
import { Link } from 'react-router-dom';
import FloatingCard from '../components/FloatingCard';

export default function SantoTomeLanding() {
  const problems = [
    { title: "No tienes web profesional", desc: "Tus clientes potenciales buscan en Google y no te encuentran, o la web está muy desactualizada.", color: "amber" },
    { title: "Tu información no está clara", desc: "No saben dónde estás, qué ofreces o cuáles son tus horarios antes de ir a tu local.", color: "blue" },
    { title: "Dependencia solo de redes sociales", desc: "El algoritmo de Instagram o Facebook limita a quién llegas, y no sustituye la seriedad de una web propia.", color: "green" },
    { title: "Clientes desde el móvil", desc: "La mayoría busca desde su teléfono. Si tu página no carga bien en móvil, el cliente no contactará.", color: "amber" }
  ];

  const businessTypes = [
    { title: "Bares y restaurantes", desc: "Muestra tu carta, facilita reservas y atrae a vecinos y personas de paso por la autovía.", color: "amber" },
    { title: "Casas rurales y alojamientos", desc: "Transmite el encanto de tu casa rural y consigue más reservas sin intermediarios.", color: "green" },
    { title: "Autónomos y profesionales", desc: "Una ventana para electricistas, fontaneros y constructores que buscan ser encontrados localmente.", color: "blue" },
    { title: "Tiendas locales", desc: "Expón tus productos y horarios para que los clientes del pueblo y visitantes te visiten.", color: "amber" },
    { title: "Talleres y servicios", desc: "Haz que tu teléfono suene cuando alguien necesite urgentemente un servicio en la zona.", color: "green" },
    { title: "Peluquerías y bienestar", desc: "Facilita la reserva de citas y transmite profesionalidad y cuidado desde el primer clic.", color: "blue" }
  ];

  return (
    <>
      {/* 1. Hero principal */}
      <section className="page-header-section" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge badge-green">Santo Tomé del Puerto</span>
          <h1>Diseño web en Santo Tomé del Puerto para negocios locales</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Creo páginas web profesionales para negocios de Santo Tomé del Puerto y pueblos cercanos que quieren transmitir confianza, aparecer mejor cuando les buscan y facilitar que sus clientes contacten desde el móvil.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
            <Link to="/contacto" className="btn btn-primary btn-glow-green">
              <span>Quiero mi página web</span>
            </Link>
            <Link to="/servicios" className="btn btn-secondary">
              <span>Ver servicios</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Sección de problema */}
      <section className="section-padding reveal visible">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Muchos negocios de Santo Tomé del Puerto todavía no muestran en internet todo lo que valen</h2>
            <p className="section-subtitle" style={{ maxWidth: '900px', margin: '0 auto' }}>
              Un negocio puede tener buen trato, buen producto y años de trabajo detrás, pero si cuando alguien lo busca en Google no encuentra una web clara, actualizada y fácil de usar, puede acabar llamando a otra opción.
            </p>
          </div>
          <div className="grid grid-2" style={{ marginTop: '40px' }}>
            {problems.map((prob, idx) => (
              <FloatingCard key={idx} glowColor={prob.color}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{prob.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{prob.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sección de solución y 6. Diferencia agencias combinados en layout visual */}
      <section className="section-padding reveal visible" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          <div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>Una web local, clara y preparada para que el cliente confíe</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Villarejo Web Studio trabaja desde Santo Tomé del Puerto para crear webs modernas, rápidas y fáciles de entender. La idea no es hacer una página bonita sin más, sino una web que explique quién eres, qué ofreces, dónde estás y cómo contactar contigo.
            </p>
            <Link to="/zona" className="btn btn-secondary">
              <span>Ver áreas de trabajo</span>
            </Link>
          </div>
          <FloatingCard glowColor="blue">
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>No necesitas irte a Madrid, Segovia o Aranda para tener una web profesional</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              La ventaja de trabajar con alguien cercano es que puedo entender mejor la realidad de los negocios de la zona. No es lo mismo crear una web genérica que crear una web pensada para un negocio local, con clientes de paso, vecinos, turistas o personas que buscan desde el móvil antes de llamar.
            </p>
          </FloatingCard>
        </div>
      </section>

      {/* 4. Sección tipos de negocios */}
      <section className="section-padding reveal visible">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Páginas web para negocios reales de la zona</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {businessTypes.map((biz, idx) => (
              <FloatingCard key={idx} glowColor={biz.color}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{biz.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{biz.desc}</p>
                <Link to="/webs-negocios" style={{ display: 'inline-block', marginTop: '12px', fontSize: '13px', color: 'var(--green-neon)' }}>Saber más &rarr;</Link>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sección zona y 7. Proceso */}
      <section className="section-padding reveal visible">
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <span className="section-badge badge-amber">Cobertura Local</span>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>Diseño web desde Santo Tomé del Puerto para la Sierra</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Trabajo con negocios de Santo Tomé del Puerto y también puedo atender negocios de Riaza, Ayllón, Buitrago de Lozoya, Boceguillas, Sepúlveda, la Sierra Norte, Segovia, Aranda de Duero y pueblos cercanos.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '16px' }}>
              *Aviso: La base técnica está en Santo Tomé del Puerto y desde ahí trabajo dando servicio y reuniéndome en los locales de mis clientes en toda la zona, no disponemos de oficinas físicas locales en otros pueblos.
            </p>
          </div>
          
          <FloatingCard glowColor="green">
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Así puede empezar tu web</h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>1.</span>
                <span><strong>Hablamos de tu negocio:</strong> Me cuentas qué necesitas.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>2.</span>
                <span><strong>Ordenamos qué debe comunicar tu web:</strong> Textos e imágenes.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>3.</span>
                <span><strong>Diseñamos una página profesional:</strong> Con aspecto premium.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>4.</span>
                <span><strong>Añadimos contacto, ubicación y CTA:</strong> Para recibir llamadas.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--green-neon)', fontWeight: 'bold' }}>5.</span>
                <span><strong>Publicamos y revisamos:</strong> La web online y funcionando.</span>
              </li>
            </ul>
          </FloatingCard>
        </div>
      </section>

      {/* 8. CTA final */}
      <section className="section-padding reveal visible" style={{ textAlign: 'center', background: 'rgba(0, 240, 255, 0.03)', borderTop: '1px solid rgba(0, 240, 255, 0.1)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>¿Quieres una página web para tu negocio en Santo Tomé del Puerto?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 30px', fontSize: '16px' }}>
            Si tienes un negocio local y quieres una web clara, moderna y profesional, puedo ayudarte a crear una presencia online que transmita confianza desde el primer momento.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/34691223199?text=Hola!%20He%20visto%20la%20web%20y%20quiero%20información%20sobre%20diseño%20web%20en%20Santo%20Tomé." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Hablar por WhatsApp
            </a>
            <Link to="/contacto" className="btn btn-secondary">
              <span>Pedir información</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
