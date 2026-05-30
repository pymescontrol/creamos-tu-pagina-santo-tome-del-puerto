import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function Freelancers() {
  return (
    <>
      <PageHeader 
        badge="Autónomos y Profesionales"
        title="Webs para autónomos y pymes locales"
        subtitle="Muestra tus especialidades, tu zona de cobertura y facilita que tus vecinos soliciten presupuestos fácilmente."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Tu profesionalidad en internet
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                No hace falta ser una gran empresa para tener una web profesional. Un autónomo también necesita que cuando alguien le busque, encuentre una imagen clara, seria y fácil de contactar.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Si eres electricista, fontanero, tienes un taller mecánico, realizas reformas del hogar, ofreces servicios a domicilio, gestionas una peluquería o academia en la comarca, tu web será tu mejor aliada para demostrar tu experiencia y captar nuevos trabajos de vecinos.
              </p>
            </div>
            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>La web de un autónomo necesita:</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li><span style={{ color: 'var(--blue-water)' }}>🛠️</span> <strong>Tus especialidades:</strong> Listado claro de qué averías, reformas o servicios realizas.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📍</span> <strong>Zona de cobertura:</strong> Detalle de los pueblos hasta los que te desplazas.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📄</span> <strong>Formulario de presupuesto:</strong> Opción para que te detallen su caso fácilmente.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>⭐</span> <strong>Testimonios de clientes:</strong> Reseñas de vecinos que ya confían en tu trabajo.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📱</span> <strong>WhatsApp directo:</strong> Contacto rápido e informal para consultas rápidas.</li>
              </ul>
            </FloatingCard>
          </div>

          <div className="grid grid-3">
            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Transmite seriedad comarcal</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Cuando un vecino necesita una reparación urgente en casa o busca un taller de reformas en la zona, busca opiniones online. Tener tu propia web con tu nombre, fotos de tus trabajos terminados y tus datos fiscales transmite una seriedad que las redes sociales o los listados telefónicos fríos no pueden dar.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Facilita el contacto directo</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Muchos autónomos pasan el día trabajando en obras o atendiendo clientes y no pueden coger el teléfono al momento. Tu web puede recibir solicitudes de presupuesto detalladas las 24 horas del día, listas para que las respondas por correo o WhatsApp en tus ratos libres.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Muestra tu trabajo</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Una buena galería fotográfica de reformas de cocinas, instalaciones eléctricas limpias o cortes de pelo de tu salón habla mejor de tu profesionalidad que cualquier folleto. Tus clientes potenciales quieren ver lo que haces para convencerse.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
