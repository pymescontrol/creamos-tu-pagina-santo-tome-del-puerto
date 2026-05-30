import React from 'react';
import PageHeader from '../components/PageHeader';
import FloatingCard from '../components/FloatingCard';
import CTASection from '../components/CTASection';

export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Hablamos de tu negocio",
      desc: "Me cuentas qué haces, dónde estás, qué servicios ofreces y qué tipo de cliente quieres atraer. Hacemos una reunión en persona o por llamada comarcal."
    },
    {
      num: "2",
      title: "Ordenamos la información",
      desc: "Transformo lo que haces en mensajes claros para que cualquier persona entienda rápido por qué debe contactar contigo y qué te diferencia de la competencia."
    },
    {
      num: "3",
      title: "Diseñamos la web",
      desc: "Creo una web moderna, visual, adaptada al móvil y con una imagen profesional. Utilizando la estética premium nocturna neón idónea para tu marca."
    },
    {
      num: "4",
      title: "Preparamos el contacto",
      desc: "Añadimos teléfono, WhatsApp si procede, ubicación de Maps, botones rápidos de llamada, horarios de apertura, fotos de tu local y llamadas a la acción directas."
    },
    {
      num: "5",
      title: "Publicamos y revisamos",
      desc: "Dejamos la web lista y revisamos que se vea fluida en móviles, ordenadores y tablets. Te explico de forma sencilla cómo editar textos tú mismo."
    }
  ];

  return (
    <>
      <PageHeader 
        badge="Metodología"
        title="Así creamos tu página web"
        subtitle="Un proceso sencillo, transparente y diseñado para que no tengas que preocuparte por tecnicismos ni configuraciones complejas."
      />

      <section className="section-padding reveal visible" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <FloatingCard glowColor="amber" style={{ marginBottom: '50px' }}>
            <p style={{ textAlign: 'center', fontSize: '16px', color: 'var(--text-primary)', fontWeight: '500' }}>
              💬 “No tienes que saber de tecnología. Yo me encargo de convertir tu negocio en una web clara y profesional.”
            </p>
          </FloatingCard>

          <div className="process-timeline" style={{ marginTop: '40px' }}>
            <div className="timeline-line">
              <div className="timeline-progress" style={{ height: '100%' }}></div>
            </div>

            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step active">
                <div className="step-marker">{step.num}</div>
                <FloatingCard glowColor="green" className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </FloatingCard>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
