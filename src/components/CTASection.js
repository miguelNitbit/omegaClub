import React from 'react';

const CTASection = () => {
  const whatsappNumber = "+522721275751";
  const createClubMessage = "Hola, quiero ser parte del cambio y crear un Club de Programación omegaUp en mi institución. ¿Podrían proporcionarme información sobre el Kit de Fundación y el proceso?";
  const joinClubMessage = "Hola, estoy muy interesado en unirme a un Club de Programación omegaUp cerca de mi ubicación. ¿Podrían ayudarme a encontrar opciones disponibles?";
  
  const createClubLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(createClubMessage)}`;
  const joinClubLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(joinClubMessage)}`;
  
  return (
    <section id="contacto" className="section" style={{ 
      background: 'var(--omegaup-primary)'
    }}>
      <div className="container text-center">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '20px'
          }}>
            ¿Listo para empezar?
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Únete al ecosistema que está transformando la programación competitiva en México. 
            Tu futuro tecnológico comienza aquí.
          </p>
          
          {/* Opciones simples */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: 'var(--border-radius)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-users" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Unirme a un Club
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                Encuentra una comunidad de programadores cerca de ti
              </p>
              <a 
                href={joinClubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ 
                  textDecoration: 'none',
                  width: '100%'
                }}
              >
                <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                Buscar Club
              </a>
            </div>
            
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: 'var(--border-radius)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-rocket" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Crear un Club
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                Lidera el cambio en tu escuela con nuestro kit completo
              </p>
              <a 
                href={createClubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ 
                  textDecoration: 'none',
                  width: '100%',
                  background: 'var(--omegaup-secondary)',
                  color: 'white',
                  border: 'none'
                }}
              >
                <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                Obtener Kit
              </a>
            </div>
          </div>
          
          {/* Info de contacto minimalista */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: 'var(--border-radius)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <p style={{ 
              margin: 0,
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
              ¿Tienes dudas? Contáctanos directamente por WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
