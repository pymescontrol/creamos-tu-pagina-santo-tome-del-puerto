import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

export default function Services() {
  const servicesList = [
    {
      icon: "💻",
      title: "Diseño de páginas web profesionales",
      desc: "Creación de páginas web con un acabado visual premium y adaptadas a la identidad de tu marca.",
      color: "green"
    },
    {
      icon: "🏪",
      title: "Webs para negocios locales",
      desc: "Especializadas en pymes, tiendas y comercios que dan servicio en la comarca.",
      color: "blue"
    },
    {
      icon: "📱",
      title: "Webs adaptadas a móvil",
      desc: "Diseñadas de forma prioritaria para pantallas de teléfonos, donde busca la mayoría de usuarios.",
      color: "amber"
    },
    {
      icon: "📞",
      title: "Webs con botón de llamada y WhatsApp",
      desc: "Facilitamos al máximo el contacto directo añadiendo accesos rápidos a tu teléfono o chat.",
      color: "green"
    },
    {
      icon: "📍",
      title: "Webs con ubicación y mapa",
      desc: "Integramos mapas dinámicos y enlaces a Google Maps para guiar a los clientes directamente a tu puerta.",
      color: "blue"
    },
    {
      icon: "✨",
      title: "Rediseño de webs antiguas",
      desc: "Actualizo tu página antigua con un diseño premium moderno que transmita total profesionalidad.",
      color: "amber"
    },
    {
      icon: "✍️",
      title: "Textos para explicar bien tu negocio",
      desc: "Redacción de los contenidos de forma clara, directa y atractiva para enganchar a tu cliente ideal.",
      color: "green"
    },
    {
      icon: "🔍",
      title: "Preparación para aparecer mejor en Google",
      desc: "Trabajo interno de optimización para que cuando busquen tu servicio en tu zona te encuentren.",
      color: "blue"
    },
    {
      icon: "🚀",
      title: "Publicación de la web",
      desc: "Me encargo de toda la configuración técnica del hosting y dominio para que tu web esté online.",
      color: "amber"
    },
    {
      icon: "🛠️",
      title: "Mantenimiento y actualizaciones",
      desc: "Me encargo de mantener tu web al día: cambiar textos, añadir fotos o actualizar lo que necesites.",
      color: "green"
    }
  ];

  return (
    <>
      <PageHeader 
        badge="Servicios Web"
        title="Diseño web para negocios locales"
        subtitle="Creo webs pensadas para negocios reales: bares, restaurantes, casas rurales, tiendas, talleres, peluquerías, autónomos y servicios profesionales que quieren verse mejor, explicar lo que hacen y facilitar que el cliente contacte."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="grid grid-3">
            {servicesList.map((service, idx) => (
              <ServiceCard 
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                glowColor={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
