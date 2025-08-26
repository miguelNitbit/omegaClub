import React from 'react';

const HeroSection = () => {
  const whatsappNumber = "+522721275751";
  const createClubMessage = "Hola, me interesa crear un Club de Programación omegaUp en mi institución. ¿Podrían proporcionarme más información sobre el proceso?";
  const joinClubMessage = "Hola, me gustaría unirme a un Club de Programación omegaUp. ¿Podrían ayudarme a encontrar un club cerca de mi ubicación?";
  
  const createClubLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(createClubMessage)}`;
  const joinClubLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(joinClubMessage)}`;
  
  return (
    <section id="inicio" className="section" style={{ 
      background: 'linear-gradient(135deg, var(--omegaup-light) 0%, var(--white) 100%)',
      paddingTop: '120px',
      paddingBottom: '80px'
    }}>
      <div className="container text-center">
        {/* Logo omegaUp simple */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '3rem',
            fontWeight: '700',
            color: 'var(--omegaup-primary)',
            marginBottom: '10px'
          }}>
            omega<span style={{ color: 'var(--omegaup-secondary)' }}>Up</span>
          </h1>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            margin: 0
          }}>
            Clubes de Programación
          </p>
        </div>
        
        {/* Mensaje principal simple */}
        <div style={{ maxWidth: '600px', margin: '0 auto 50px auto' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--dark-color)',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}>
            El epicentro de la programación competitiva en México
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem',
            color: 'var(--gray-medium)',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Únete al semillero nacional de talento. Aprende, compite y transforma 
            tu futuro tecnológico junto a otros estudiantes apasionados.
          </p>
        </div>
        
        {/* CTAs principales - diseño minimalista */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a 
            href={joinClubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ 
              textDecoration: 'none',
              minWidth: '220px'
            }}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
            Unirme a un Club
          </a>
          
          <a 
            href={createClubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ 
              textDecoration: 'none',
              minWidth: '220px'
            }}
          >
            <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
            Crear un Club
          </a>
        </div>
        
        {/* Información adicional */}
        <div style={{
          padding: '20px',
          background: 'var(--white)',
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--omegaup-light)',
          display: 'inline-block'
        }}>
          <p style={{ 
            margin: 0,
            fontSize: '0.95rem',
            color: 'var(--gray-medium)'
          }}>
            Dirigido a estudiantes de preparatoria, universidad y docentes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
