import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function RuralHouses() {
  return (
    <>
      <PageHeader 
        badge="Turismo Rural"
        title="Webs para casas rurales y alojamientos"
        subtitle="Muestra el encanto de tu alojamiento y consigue reservas directas sin pagar comisiones abusivas a intermediarios."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ display: 'grid', gap: '60px' }}>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                Tu alojamiento rural independiente
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Atrae a los turistas que vienen de <strong>Madrid, Segovia</strong> o zonas cercanas con una web espectacular. Diseñada especialmente para alojamientos rurales, apartamentos de alquiler vacacional y experiencias de ocio activo en la zona de <strong>Riaza, La Pinilla, Ayllón, Sepúlveda, Buitrago de Lozoya, la Sierra Norte y Santo Tomé del Puerto</strong>.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Una página web propia te da total libertad: puedes mostrar tu galería de fotos sin límites, detallar las rutas y pueblos que tus huéspedes pueden visitar y facilitar el contacto directo para gestionar la reserva ahorrándote las costosas tasas de otras plataformas de alquiler.
              </p>
            </div>
            <FloatingCard glowColor="green">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '700', marginBottom: '14px' }}>Imprescindibles para tu web:</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li><span style={{ color: 'var(--green-neon)' }}>🏡</span> <strong>Galería fotográfica:</strong> Imágenes de habitaciones, jardín y salones.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>🌲</span> <strong>Información del entorno:</strong> Rutas, restaurantes y actividades cercanas.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>🛎️</span> <strong>Reservas o contacto directo:</strong> Formulario rápido para peticiones de fechas.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>🗺️</span> <strong>Ubicación exacta:</strong> Enlaces para llegar al alojamiento con GPS.</li>
                <li><span style={{ color: 'var(--green-neon)' }}>📋</span> <strong>Servicios del alojamiento:</strong> Piscina, wifi, barbacoa, aceptación de mascotas.</li>
              </ul>
            </FloatingCard>
          </div>

          <div className="grid grid-2">
            <FloatingCard glowColor="blue">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Ahorra comisiones de portales externos</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Muchos huéspedes prefieren contactar directamente con el dueño de la casa rural para aclarar dudas sobre las mascotas, cunas para bebés o el uso de zonas comunes. Al darles un canal directo (WhatsApp, llamada, formulario), facilitas la reserva directa libre de intermediaciones.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="amber">
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Presume del entorno y actividades</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Los visitantes no solo eligen tu casa rural por las camas. La eligen por la comarca: la cercanía a la estación de La Pinilla, el cañón del Río Duratón en Sepúlveda o los pueblos rojos y negros de Riaza. Una web que promociona estas rutas se convierte en un imán turístico para fines de semana.
              </p>
            </FloatingCard>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
