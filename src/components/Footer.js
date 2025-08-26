import React from 'react';

const Footer = () => {
  const whatsappNumber = "+522721275751";
  const generalMessage = "Hola, me gustaría recibir más información sobre los Clubes de Programación omegaUp. ¿Podrían ayudarme?";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(generalMessage)}`;
  
  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--omegaup-light)',
      padding: '40px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          {/* Logo y descripción */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--omegaup-primary)',
              marginBottom: '15px'
            }}>
              omega<span style={{ color: 'var(--omegaup-secondary)' }}>Up</span>
            </h3>
            <p style={{ 
              fontSize: '0.95rem',
              color: 'var(--gray-medium)',
              lineHeight: '1.6',
              margin: 0
            }}>
              El epicentro de la programación competitiva en México. 
              Transformando estudiantes en líderes tecnológicos.
            </p>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem',
              color: 'var(--omegaup-primary)',
              marginBottom: '15px'
            }}>
              Contacto
            </h4>
            <div style={{ marginBottom: '10px' }}>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gray-medium)',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                <i className="fab fa-whatsapp" style={{ color: 'var(--omegaup-secondary)' }}></i>
                WhatsApp
              </a>
            </div>
            <div>
              <a 
                href="https://omegaup.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gray-medium)',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                <i className="fas fa-globe" style={{ color: 'var(--omegaup-secondary)' }}></i>
                omegaup.com
              </a>
            </div>
          </div>
          
          {/* Los 3 pilares */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem',
              color: 'var(--omegaup-primary)',
              marginBottom: '15px'
            }}>
              Pilares Estratégicos
            </h4>
            <div style={{ fontSize: '0.95rem', color: 'var(--gray-medium)' }}>
              <div style={{ marginBottom: '5px' }}>
                <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
                Liderazgo Viral
              </div>
              <div style={{ marginBottom: '5px' }}>
                <i className="fas fa-route" style={{ marginRight: '8px' }}></i>
                Rutas de Aprendizaje
              </div>
              <div>
                <i className="fas fa-gamepad" style={{ marginRight: '8px' }}></i>
                Gamificación Total
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--omegaup-light)',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0,
            fontSize: '0.9rem',
            color: 'var(--gray-light)'
          }}>
            © 2024 omegaUp. Forjando el futuro tecnológico de México.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
