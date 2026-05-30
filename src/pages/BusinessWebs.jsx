import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function BusinessWebs() {
  return (
    <>
      <PageHeader 
        badge="Presencia Digital"
        title="Webs para negocios de toda la vida"
        subtitle="Un negocio local necesita algo más que una red social o una web antigua que no funciona en móviles. Necesita una ventana digital que transmita total confianza."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Tu escaparate digital 24/7
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px' }}>
                Hoy en día, la mayoría de tus clientes buscan lo que necesitan desde el móvil. Si no tienes una web propia, te estás volviendo invisible para los turistas que viajan por la zona, las personas que buscan un servicio de paso o tus propios vecinos.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Trabajo desde mi base en <strong>Santo Tomé del Puerto</strong> diseñando páginas a medida para negocios en <strong>Riaza, Ayllón, Buitrago de Lozoya, Segovia, Aranda de Duero</strong> y pueblos cercanos, garantizando un trato cercano y la posibilidad de reunirnos en persona.
              </p>
            </div>
            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>¿Qué debe mostrar tu web?</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li><span style={{ color: 'var(--blue-water)' }}>📍</span> <strong>Ubicación exacta:</strong> Mapa para que lleguen a ti en un toque.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📞</span> <strong>Llamada directa:</strong> Botones visibles de WhatsApp y teléfono.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>⏰</span> <strong>Horario comercial:</strong> Información siempre actualizada y clara.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📷</span> <strong>Fotos de calidad:</strong> Tu local y productos de forma atractiva.</li>
                <li><span style={{ color: 'var(--blue-water)' }}>📋</span> <strong>Tus servicios:</strong> Qué haces y por qué eres de confianza.</li>
              </ul>
            </FloatingCard>
          </div>

          <div className="grid grid-3">
            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>¿Solo tienes redes sociales?</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Las redes son útiles, pero no te pertenecen. Tus horarios no se ven claros, tus publicaciones se pierden en el feed y obligas al cliente a crearse una cuenta para ver lo que haces.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>¿Tu web tiene más de 5 años?</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Una web que no carga bien en móviles, con textos desfasados o tipografías antiguas, da una imagen de dejadez y hace que el cliente acabe buscando otra opción que parezca más seria.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>El poder de la confianza</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Tu web es tu casa digital. Un diseño premium y textos claros demuestran al instante que tu negocio es serio, activo y que está listo para atender a su cliente.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
