import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function RestaurantWebs() {
  return (
    <>
      <PageHeader 
        badge="Hostelería y Alimentación"
        title="Webs para restaurantes, bares y tiendas locales"
        subtitle="Muestra tu carta digital, tus horarios y tu localización sin PDFs molestos. Facilita que tus clientes reserven o te encuentren desde la carretera."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Tu carta y tu local, a un toque del móvil
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                En zonas como <strong>Santo Tomé del Puerto, Riaza, Ayllón, Buitrago de Lozoya o la Sierra Norte</strong>, muchos clientes buscan desde el móvil dónde comer, dónde comprar o dónde parar. Una web clara puede hacer que elijan tu negocio antes que otro.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Si eres un restaurante de paso en la nacional A-1, un bar con encanto en la plaza mayor o una tienda de alimentación tradicional, tu web debe guiar al cliente directamente a tu puerta y facilitarle la consulta rápida de tu oferta gastronómica o productos de temporada.
              </p>
            </div>
            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>Lo que tu web debe tener:</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li><span style={{ color: 'var(--amber-fire)' }}>📖</span> <strong>Menú o Carta digital:</strong> Fácil de leer desde el móvil (nada de descargar PDFs).</li>
                <li><span style={{ color: 'var(--amber-fire)' }}>🚗</span> <strong>Ubicación GPS:</strong> Botón de Google Maps para conductores y ciclistas.</li>
                <li><span style={{ color: 'var(--amber-fire)' }}>☎️</span> <strong>Botón de llamada rápida:</strong> Reservas de mesa rápidas en un clic.</li>
                <li><span style={{ color: 'var(--amber-fire)' }}>📷</span> <strong>Fotos del local:</strong> Enseña tu salón, terraza o platos estrella.</li>
                <li><span style={{ color: 'var(--amber-fire)' }}>🏪</span> <strong>Productos locales:</strong> Carnicerías y tiendas que destacan su género de calidad.</li>
              </ul>
            </FloatingCard>
          </div>

          <div className="grid grid-2">
            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Para clientes de paso y turistas</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Los fines de semana y temporadas de esquí en La Pinilla, miles de turistas de Madrid recorren las carreteras de la zona. Cuando buscan un sitio para comer en el móvil, un bar con web propia, fotos cuidadas de su menú y coordenadas de ubicación claras tiene el doble de probabilidades de recibir su visita.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Para tus vecinos de siempre</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Mantén informados a tus clientes locales de tus horarios especiales de festivos, nuevos platos de la semana o eventos de tu local. Un canal web transparente estrecha lazos y hace que tu negocio sea el punto de referencia favorito de la comarca.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
