import React from 'react';

const RegistrationSection = () => {
  const whatsappNumber = "+522721275751";
  const registrationMessage = "Hola, he visto la información sobre el proceso de inscripción para crear un Club de Programación omegaUp y me gustaría recibir más detalles sobre los requisitos y el procedimiento.";
  const registrationLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(registrationMessage)}`;

  return (
    <section id="inscripcion" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Proceso de Inscripción
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            ¿Quieres fundar un Club de Programación omegaUp en tu institución? 
            El proceso es simple y está diseñado para que cualquier estudiante o docente 
            motivado pueda crear un impacto real.
          </p>
        </div>

        {/* Requisitos */}
        <div style={{
          background: 'var(--omegaup-light)',
          padding: '40px',
          borderRadius: 'var(--border-radius)',
          marginBottom: '50px'
        }}>
          <h3 style={{ 
            fontSize: '1.6rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '25px',
            textAlign: 'center'
          }}>
            Requisitos para Fundar un Club
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div className="card" style={{ background: 'white', textAlign: 'center' }}>
              <div style={{ 
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                <i className="fas fa-school" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Afiliación Institucional
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Debes formar parte de una <strong>institución educativa</strong> como 
                alumno o docente (preparatoria, universidad, instituto tecnológico, etc.)
              </p>
            </div>
            
            <div className="card" style={{ background: 'white', textAlign: 'center' }}>
              <div style={{ 
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                <i className="fas fa-heart" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Motivación y Compromiso
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Tener <strong>ganas de crear comunidad</strong> y el deseo de impactar 
                positivamente a otros estudiantes interesados en programación
              </p>
            </div>
            
            <div className="card" style={{ background: 'white', textAlign: 'center' }}>
              <div style={{ 
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                <i className="fas fa-users-cog" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Espíritu de Liderazgo
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Disposición para <strong>facilitar y organizar</strong> actividades del club 
                (no necesitas ser experto técnico, ¡nosotros te enseñamos!)
              </p>
            </div>
          </div>
        </div>

        {/* Proceso paso a paso */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ 
            fontSize: '1.8rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Proceso de Aplicación
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {/* Paso 1 */}
            <div className="card" style={{ 
              border: '2px solid var(--omegaup-primary)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                background: 'var(--omegaup-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem'
              }}>
                1
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ 
                  fontSize: '1.3rem',
                  color: 'var(--omegaup-primary)',
                  marginBottom: '20px'
                }}>
                  Crea tu Video de Presentación
                </h4>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--gray-medium)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Graba un video explicando:
                </p>
                <ul style={{ 
                  textAlign: 'left',
                  color: 'var(--gray-medium)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  paddingLeft: '20px'
                }}>
                  <li><strong>Quién eres</strong> (nombre, edad, carrera/grado)</li>
                  <li><strong>En qué institución estudias</strong> o trabajas</li>
                  <li><strong>Por qué quieres abrir</strong> un Club omegaUp</li>
                  <li><strong>Tu visión</strong> para el club en tu institución</li>
                </ul>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="card" style={{ 
              border: '2px solid var(--omegaup-secondary)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                background: 'var(--omegaup-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem'
              }}>
                2
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ 
                  fontSize: '1.3rem',
                  color: 'var(--omegaup-primary)',
                  marginBottom: '20px'
                }}>
                  Envía tu Aplicación
                </h4>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--gray-medium)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Envía tu video a nuestro correo oficial:
                </p>
                
                <div style={{
                  background: 'var(--omegaup-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}>
                  <div style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: 'var(--omegaup-primary)',
                    marginBottom: '5px'
                  }}>
                    hello@omegaup.com
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--gray-medium)'
                  }}>
                    Asunto: "Aplicación Club omegaUp - [Tu Institución]"
                  </div>
                </div>
                
                <p style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  Incluye información adicional sobre tu institución y datos de contacto
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="card" style={{ 
              border: '2px solid var(--omegaup-accent)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                background: 'var(--omegaup-accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem'
              }}>
                3
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ 
                  fontSize: '1.3rem',
                  color: 'var(--omegaup-primary)',
                  marginBottom: '20px'
                }}>
                  Recibe tu Kit de Fundación
                </h4>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'var(--gray-medium)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Una vez aprobada tu aplicación, recibirás:
                </p>
                <ul style={{ 
                  textAlign: 'left',
                  color: 'var(--gray-medium)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  paddingLeft: '20px'
                }}>
                  <li><strong>Kit completo</strong> de fundación de clubes</li>
                  <li><strong>Materiales didácticos</strong> y guías</li>
                  <li><strong>Soporte directo</strong> del equipo omegaUp</li>
                  <li><strong>Acceso a la red</strong> de líderes nacionales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fechas importantes */}
        <div style={{
          background: '#fff3cd',
          border: '2px solid #ffc107',
          padding: '30px',
          borderRadius: 'var(--border-radius)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '2.5rem',
            marginBottom: '15px'
          }}>
            <i className="fas fa-calendar-alt" style={{ color: '#856404' }}></i>
          </div>
          
          <h3 style={{ 
            fontSize: '1.6rem',
            color: '#856404',
            marginBottom: '20px'
          }}>
            Fechas de Inscripción 2024
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <div style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#856404',
                marginBottom: '5px'
              }}>
                1 de Septiembre
              </div>
              <div style={{ 
                fontSize: '1rem',
                color: '#856404'
              }}>
                Inicio de Inscripciones
              </div>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#856404',
                marginBottom: '5px'
              }}>
                17 de Septiembre
              </div>
              <div style={{ 
                fontSize: '1rem',
                color: '#856404'
              }}>
                Cierre de Inscripciones
              </div>
            </div>
          </div>
          
          <p style={{ 
            fontSize: '0.95rem',
            color: '#856404',
            marginTop: '15px',
            margin: '15px 0 0 0',
            fontStyle: 'italic'
          }}>
            ¡No dejes pasar esta oportunidad de ser parte del cambio!
          </p>
        </div>

        {/* CTA de inscripción */}
        <div style={{
          background: 'var(--omegaup-primary)',
          padding: '40px',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.8rem',
            color: 'white',
            marginBottom: '20px'
          }}>
            ¿Listo para Ser un Líder omegaUp?
          </h3>
          
          <p style={{ 
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Si cumples con los requisitos y tienes las ganas de crear impacto en tu institución, 
            ¡queremos conocerte! Contáctanos para recibir más información sobre el proceso.
          </p>
          
          <a 
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              textDecoration: 'none',
              background: 'white',
              color: 'var(--omegaup-primary)',
              fontSize: '1.2rem',
              padding: '16px 32px',
              fontWeight: '600'
            }}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
            Iniciar Proceso de Inscripción
          </a>
          
          <p style={{ 
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '20px',
            margin: '20px 0 0 0'
          }}>
            Te conectaremos directamente con nuestro equipo para guiarte paso a paso
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
