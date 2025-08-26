import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es exactamente un Club de Programación omegaUp?",
      answer: "Es una comunidad estudiantil dentro de una institución educativa enfocada en aprender y practicar programación competitiva. Los miembros resuelven problemas algoritmos, participan en competencias y desarrollan habilidades de programación bajo la metodología y recursos de omegaUp."
    },
    {
      question: "¿Necesito ser experto en programación para fundar un club?",
      answer: "¡Para nada! Como líder de club, tu rol principal es ser un facilitador, no un profesor. Proporcionamos todo el material didáctico, las rutas de aprendizaje y el soporte técnico necesario. Lo más importante es tener ganas de crear comunidad y liderar."
    },
    {
      question: "¿Qué incluye el Kit de Fundación de Clubes?",
      answer: "El kit incluye guías paso a paso para crear el club, materiales didácticos estructurados, plantillas para organizar sesiones, acceso a recursos exclusivos, soporte directo del equipo omegaUp y conexión con la red nacional de líderes."
    },
    {
      question: "¿Cuánto tiempo debo dedicar como líder de un club?",
      answer: "Recomendamos entre 2-4 horas por semana. Esto incluye la preparación de sesiones (30 min), dirigir reuniones del club (1-2 horas) y coordinación general. El sistema está diseñado para ser eficiente y no abrumar a los líderes."
    },
    {
      question: "¿Los clubes son solo para estudiantes de informática o computación?",
      answer: "¡No! Los clubes están abiertos a estudiantes de cualquier carrera o área de estudio. La programación competitiva desarrolla habilidades de pensamiento lógico y resolución de problemas que son valiosas en cualquier disciplina."
    },
    {
      question: "¿Qué nivel de programación necesitan los miembros para unirse?",
      answer: "Aceptamos estudiantes de todos los niveles, desde principiantes absolutos hasta programadores avanzados. Nuestras 'Sendas de Aprendizaje' están diseñadas para guiar a cada estudiante según su nivel actual."
    },
    {
      question: "¿Hay algún costo para crear o mantener un club?",
      answer: "No, el programa es completamente gratuito. omegaUp proporciona todos los recursos, materiales y soporte sin ningún costo para las instituciones, líderes o miembros."
    },
    {
      question: "¿Cómo funciona el sistema de 'Puntos Omega' y rankings?",
      answer: "Es un sistema de gamificación similar al Elo de ajedrez. Los estudiantes ganan puntos resolviendo problemas y participando en competencias. Esto crea rankings individuales y de clubes, fomentando una competencia sana y motivante."
    },
    {
      question: "¿Qué apoyo recibo como líder de club?",
      answer: "Recibes soporte continuo incluyendo: capacitación inicial, acceso a materiales actualizados, comunidad de líderes para compartir experiencias, soporte técnico directo y eventos exclusivos para líderes."
    },
    {
      question: "¿Pueden los docentes participar o liderar clubes?",
      answer: "¡Absolutamente! Los docentes son bienvenidos tanto como líderes como mentores de clubes. Su experiencia educativa es muy valiosa para guiar a los estudiantes y fortalecer el impacto del club."
    },
    {
      question: "¿Qué pasa si mi institución ya tiene un club de programación?",
      answer: "Perfecto, pueden integrar la metodología omegaUp o crear un club especializado en programación competitiva. Muchas instituciones tienen múltiples clubes con diferentes enfoques, y el nuestro complementa perfectamente otras iniciativas."
    },
    {
      question: "¿Cómo se conecta mi club con otros clubes del país?",
      answer: "A través de la 'Liga de Clubes' nacional, eventos inter-clubes, competencias nacionales y la plataforma online donde todos los clubes interactúan. Esto crea una red nacional de estudiantes con intereses similares."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Preguntas Frecuentes
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Resolvemos las dudas más comunes sobre los Clubes de Programación omegaUp 
            para que tengas toda la información necesaria.
          </p>
        </div>

        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{
                background: 'white',
                border: '1px solid var(--omegaup-light)',
                borderRadius: 'var(--border-radius)',
                marginBottom: '15px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-light)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  background: openFAQ === index ? 'var(--omegaup-light)' : 'white',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'var(--transition)'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--omegaup-primary)',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {faq.question}
                </h3>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--omegaup-secondary)',
                  transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'var(--transition)',
                  marginLeft: '15px',
                  flexShrink: 0
                }}>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div style={{
                  padding: '0 25px 25px 25px',
                  background: 'white',
                  borderTop: '1px solid var(--omegaup-light)'
                }}>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--gray-medium)',
                    lineHeight: '1.7',
                    margin: '15px 0 0 0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA al final del FAQ */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '30px',
          background: 'var(--omegaup-light)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ 
            fontSize: '1.4rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '15px'
          }}>
            ¿Tienes alguna otra pregunta?
          </h3>
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--gray-medium)',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            Nuestro equipo está listo para resolver cualquier duda adicional que tengas 
            sobre el proceso de crear o unirte a un Club de Programación omegaUp.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-comments" style={{ marginRight: '8px' }}></i>
              Contáctanos
            </a>
            
            <a 
              href="#inscripcion"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('inscripcion');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
              Ver Proceso de Inscripción
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
