import React from 'react';

const VideoSection = () => {
  return (
    <section className="section" style={{ background: 'var(--omegaup-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Conoce Más Sobre los Clubes omegaUp
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Descubre de primera mano cómo funcionan nuestros clubes y el impacto 
            que están generando en la comunidad estudiantil mexicana.
          </p>
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          background: 'white',
          borderRadius: 'var(--border-radius)',
          padding: '30px',
          boxShadow: 'var(--shadow-medium)'
        }}>
          {/* Video de YouTube */}
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: 'var(--border-radius)',
            marginBottom: '20px'
          }}>
            <iframe
              src="https://www.youtube.com/embed/g703ZvnZu18"
              title="Clubes de Programación omegaUp"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allowFullScreen
            />
          </div>
          
          {/* Información adicional */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-play-circle" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '8px'
              }}>
                Testimonios Reales
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Escucha las experiencias de estudiantes y líderes actuales
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-graduation-cap" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '8px'
              }}>
                Casos de Éxito
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Conoce clubes exitosos y sus logros en competencias
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-rocket" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '8px'
              }}>
                Proceso Completo
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Visualiza paso a paso cómo crear y liderar un club
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
