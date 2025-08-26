import React from 'react';

const AboutSection = () => {
  return (
    <section id="acerca" className="section">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '30px'
          }}>
            Acerca de los Clubes omegaUp
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: 'var(--gray-medium)',
            marginBottom: '40px'
          }}>
            Los Clubes de Programación omegaUp son una iniciativa revolucionaria para transformar 
            la plataforma de un simple juez en línea al <strong>epicentro del ecosistema de 
            programación competitiva en México</strong>. Nuestro objetivo es construir un 
            <strong> semillero nacional de talento</strong> que identifique, prepare y proyecte 
            a los mejores programadores jóvenes del país a nivel mundial de forma escalable y sostenible.
          </p>
          
          {/* Beneficios principales en formato simple */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-rocket" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Liderazgo Viral
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Estudiantes motivados se convierten en líderes con nuestro Kit de Fundación
              </p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-route" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Rutas Claras
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Sendas de aprendizaje desde novato hasta competidor de élite
              </p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-gamepad" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Competencia
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Sistema de puntos y ligas que mantienen la motivación al máximo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
