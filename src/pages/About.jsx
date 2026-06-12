import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <>
      <PageHeader 
        badge="El Estudio"
        title="Daiaxme Web Studio: diseño web cercano para negocios locales"
        subtitle="Diseño web honesto, cercano y enfocado a la comarca de Santo Tomé del Puerto."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Cercanía y tecnología
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px' }}>
                **Daiaxme Web Studio nace con una idea clara:** ayudar a negocios locales a tener una imagen digital profesional sin perder cercanía. Muchos negocios de pueblo tienen buen producto, buen trato y años de trabajo detrás, pero no siempre lo transmiten en internet. Mi trabajo es convertir esa esencia en una web clara, moderna y preparada para que el cliente confíe.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Sé lo que cuesta levantar la persiana o atender un alojamiento rural de sol a sol en nuestra zona. Por eso, no te ofrezco soluciones impersonales ni te hablo con tecnicismos informáticos difíciles de entender. Te ofrezco un trato de tú a tú, sincero, creativo y con intención.
              </p>
            </div>
            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Mis pilares de trabajo</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                <li><span style={{ color: 'var(--green-neon)' }}>🤝</span> <strong>Trato personal:</strong> Reuniones físicas en tu local para perfilar el diseño.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>💡</span> <strong>Visión creativa:</strong> Estética premium cuidada, alejada de plantillas clónicas.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>🎯</span> <strong>Webs con intención:</strong> Estructuras pensadas para captar llamadas y clientes.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>⚡</span> <strong>Optimización real:</strong> Páginas rápidas, legibles y adaptadas a móvil.</li>
              </ul>
            </FloatingCard>
          </div>

          <div className="grid grid-3">
            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Hecho desde aquí</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Entiendo el movimiento del turismo los fines de semana, la importancia del paso de coches de la A-1 y la tranquilidad de los meses de invierno. Diseñar con conocimiento del entorno marca la diferencia en los contenidos.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>No uso plantillas vacías</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Cada negocio tiene una historia. Tu web debe reflejar la calidad de tu trabajo, tus platos o tus habitaciones mediante un diseño neón premium personalizado y textos que transmitan confianza al instante.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Mantenimiento continuo</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                No desaparezco al entregar la web. Me encargo del mantenimiento continuo para que tu página siempre esté actualizada con nuevas fotos, textos o cualquier cambio que necesites con el paso del tiempo.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
