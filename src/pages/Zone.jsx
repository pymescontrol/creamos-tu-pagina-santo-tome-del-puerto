import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import LocationGrid from '../components/LocationGrid';
import CTASection from '../components/CTASection';

export default function Zone() {
  return (
    <>
      <PageHeader 
        badge="Área de Cobertura"
        title="Estudio de diseño web local en la Sierra"
        subtitle="Mi base principal está en Santo Tomé del Puerto. Me desplazo para reunirme con negocios locales en toda la comarca."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Tu diseñador web a la vuelta de la esquina
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px' }}>
                Daiaxme Web Studio trabaja desde **Santo Tomé del Puerto**, en una zona estratégica entre Segovia, la Sierra Norte de Madrid, Riaza, Ayllón, Buitrago de Lozoya y pueblos cercanos.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px' }}>
                **Mi ventaja es la cercanía.** Puedo entender mejor la realidad de los negocios de la zona porque no hablo desde una gran ciudad ni desde una agencia impersonal. Hablo desde aquí, desde el entorno donde están muchos de los negocios que necesitan dar el salto digital.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                *Aviso: No dispongo de oficinas físicas en todas las localidades mencionadas. Mi sede única de desarrollo está en Santo Tomé del Puerto, ofreciendo asistencia presencial en los locales de mis clientes en toda la comarca.*
              </p>
            </div>
            
            <LocationGrid />
          </div>

          <div className="grid grid-3">
            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Santo Tomé, Riaza y Ayllón</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Nuestra base comarcal directa. Visito periódicamente restaurantes, alojamientos turísticos y comercios de la falda de la sierra y la vertiente segoviana.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Buitrago y Sierra Norte</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Conectando con la comarca madrileña cruzando el puerto de Somosierra. Atendemos a autónomos y servicios que captan clientela de fin de semana.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Segovia y Aranda</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Nuestras grandes ciudades de referencia. Creamos webs para que los pequeños negocios comarcales puedan competir de tú a tú contra marcas urbanas.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
