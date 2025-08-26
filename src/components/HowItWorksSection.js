import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section" style={{ background: 'var(--omegaup-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Cómo Funciona el Ecosistema
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Nuestro programa se basa en tres pilares estratégicos que trabajan en conjunto 
            para crear el semillero de talento más poderoso de México.
          </p>
        </div>

        {/* Los 3 Pilares */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Pilar 1: La Chispa */}
          <div className="card" style={{ 
            border: '2px solid var(--omegaup-primary)',
            background: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--omegaup-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto'
              }}>
                <i className="fas fa-rocket" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                La Chispa
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                (Liderazgo Viral)
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Empoderamos a estudiantes motivados para que se conviertan en 
                <strong> "Líderes omegaUp"</strong> y fundan clubes en sus instituciones 
                educativas de manera sencilla y efectiva.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Características principales:
              </h4>
              
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.5',
                paddingLeft: '20px'
              }}>
                <li>Kit de Fundación completo ("club-en-una-caja")</li>
                <li>Rol de facilitador, no de profesor</li>
                <li>Eliminación total de la burocracia</li>
                <li>Soporte continuo del equipo omegaUp</li>
                <li>Red nacional de líderes</li>
              </ul>
            </div>
          </div>

          {/* Pilar 2: La Senda del Campeón */}
          <div className="card" style={{ 
            border: '2px solid var(--omegaup-secondary)',
            background: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--omegaup-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto'
              }}>
                <i className="fas fa-route" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                La Senda del Campeón
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                (Rutas de Aprendizaje)
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Estructuramos el conocimiento en <strong>trayectorias de aprendizaje claras</strong> 
                que resuelven la pregunta "¿Por dónde empiezo?" y guían a los estudiantes 
                desde principiante hasta competidor de élite.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Tres rutas principales:
              </h4>
              
              <div style={{ marginBottom: '15px' }}>
                <div style={{ 
                  padding: '12px',
                  background: 'var(--omegaup-light)',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}>
                  <strong style={{ color: 'var(--omegaup-primary)' }}>
                    <i className="fas fa-seedling" style={{ marginRight: '8px' }}></i>
                    Ruta del Novato
                  </strong>
                  <br />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
                    Introducción a C++ - Para principiantes absolutos
                  </span>
                </div>
                
                <div style={{ 
                  padding: '12px',
                  background: 'var(--omegaup-light)',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}>
                  <strong style={{ color: 'var(--omegaup-primary)' }}>
                    <i className="fas fa-code" style={{ marginRight: '8px' }}></i>
                    Ruta del Programador
                  </strong>
                  <br />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
                    Curso OMI - Preparación para competencias nacionales
                  </span>
                </div>
                
                <div style={{ 
                  padding: '12px',
                  background: 'var(--omegaup-light)',
                  borderRadius: '6px'
                }}>
                  <strong style={{ color: 'var(--omegaup-primary)' }}>
                    <i className="fas fa-laptop-code" style={{ marginRight: '8px' }}></i>
                    Ruta del Hacker
                  </strong>
                  <br />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
                    Algoritmos avanzados - Nivel competitivo internacional
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 3: Arena omegaUp */}
          <div className="card" style={{ 
            border: '2px solid var(--omegaup-accent)',
            background: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--omegaup-accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto'
              }}>
                <i className="fas fa-gamepad" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Arena omegaUp
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                (Gamificación Total)
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Un <strong>ecosistema de competencia adictivo</strong> que mantiene la 
                motivación y el compromiso al máximo nivel a través de gamificación 
                inteligente y competencias emocionantes.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Sistema de gamificación:
              </h4>
              
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.5',
                paddingLeft: '20px'
              }}>
                <li><strong>"Puntos Omega"</strong> - Sistema de rating individual tipo Elo</li>
                <li><strong>Rankings dinámicos</strong> - Tablas de clasificación en tiempo real</li>
                <li><strong>"Liga de Clubes"</strong> - Competencia nacional con divisiones</li>
                <li><strong>Ascensos y descensos</strong> - Sistema de promoción competitivo</li>
                <li><strong>Rivalidad sana</strong> - Fomenta el espíritu de equipo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resumen final */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: 'var(--border-radius)',
          border: '2px solid var(--omegaup-primary)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.6rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Una Estrategia Integral
          </h3>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Estos tres pilares trabajan en sinergia para crear una 
            <strong> comunidad auto-sostenible y competitiva</strong> que no solo enseña 
            a programar, sino que forja el carácter, la resiliencia y la capacidad de 
            resolver problemas complejos, preparando a los <strong>futuros líderes 
            tecnológicos de México</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
