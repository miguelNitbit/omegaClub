import React from 'react';

const ResourcesSection = () => {
  return (
    <section id="recursos" className="section" style={{ background: 'var(--omegaup-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Recursos de Aprendizaje
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explora nuestras rutas de aprendizaje diseñadas para llevarte desde principiante 
            hasta competidor de élite en programación competitiva.
          </p>
        </div>

        {/* Rutas de Aprendizaje */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Ruta del Novato */}
          <div className="card" style={{ 
            border: '3px solid #28a745',
            background: 'white',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
              background: '#28a745',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              PRINCIPIANTE
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '15px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <i className="fas fa-seedling" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Ruta del Novato
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                Introducción a C++
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                <strong>Perfecta para principiantes absolutos.</strong> Aprende los fundamentos 
                de la programación en C++ desde cero con ejercicios prácticos y explicaciones 
                claras paso a paso.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Lo que aprenderás:
              </h4>
              
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '25px',
                paddingLeft: '20px'
              }}>
                <li>Sintaxis básica de C++</li>
                <li>Variables, tipos de datos y operadores</li>
                <li>Estructuras de control (if, loops)</li>
                <li>Funciones y procedimientos</li>
                <li>Arrays y strings básicos</li>
                <li>Resolución de problemas simples</li>
              </ul>
              
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Duración estimada:</strong> 4-6 semanas
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Prerrequisitos:</strong> Ninguno
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)'
                }}>
                  <strong>Nivel:</strong> Principiante
                </div>
              </div>
            </div>
            
            <a 
              href="https://omegaup.com/course/introduccion_a_cpp/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                textDecoration: 'none',
                width: '100%',
                background: '#28a745',
                borderColor: '#28a745'
              }}
            >
              <i className="fas fa-play" style={{ marginRight: '8px' }}></i>
              Comenzar Ruta del Novato
            </a>
          </div>

          {/* Ruta del Programador */}
          <div className="card" style={{ 
            border: '3px solid var(--omegaup-secondary)',
            background: 'white',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
              background: 'var(--omegaup-secondary)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              INTERMEDIO
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '15px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'var(--omegaup-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <i className="fas fa-code" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Ruta del Programador
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                Curso OMI
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                <strong>Preparación específica para la OMI.</strong> Desarrolla las habilidades 
                necesarias para competir en la Olimpiada Mexicana de Informática y otras 
                competencias nacionales.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Lo que aprenderás:
              </h4>
              
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '25px',
                paddingLeft: '20px'
              }}>
                <li>Algoritmos de búsqueda y ordenamiento</li>
                <li>Estructuras de datos básicas (stacks, queues)</li>
                <li>Recursión y divide y vencerás</li>
                <li>Programación dinámica introductoria</li>
                <li>Teoría de grafos básica</li>
                <li>Estrategias de competencia</li>
              </ul>
              
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Duración estimada:</strong> 8-12 semanas
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Prerrequisitos:</strong> Conceptos básicos de programación
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)'
                }}>
                  <strong>Nivel:</strong> Intermedio
                </div>
              </div>
            </div>
            
            <a 
              href="https://omegaup.com/course/Curso-OMI/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                textDecoration: 'none',
                width: '100%',
                background: 'var(--omegaup-secondary)',
                borderColor: 'var(--omegaup-secondary)'
              }}
            >
              <i className="fas fa-trophy" style={{ marginRight: '8px' }}></i>
              Comenzar Ruta del Programador
            </a>
          </div>

          {/* Ruta del Hacker */}
          <div className="card" style={{ 
            border: '3px solid #dc3545',
            background: 'white',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
              background: '#dc3545',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              AVANZADO
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '15px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: '#dc3545',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <i className="fas fa-laptop-code" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Ruta del Hacker
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--omegaup-secondary)',
                fontWeight: '600',
                margin: 0
              }}>
                Algoritmos Avanzados
              </p>
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--gray-medium)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                <strong>Para competidores de élite.</strong> Domina algoritmos avanzados y 
                técnicas sofisticadas necesarias para competencias internacionales como 
                ICPC y IOI.
              </p>
              
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Lo que aprenderás:
              </h4>
              
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '25px',
                paddingLeft: '20px'
              }}>
                <li>Algoritmos de grafos avanzados</li>
                <li>Programación dinámica compleja</li>
                <li>Estructuras de datos especializadas</li>
                <li>Algoritmos de geometría computacional</li>
                <li>Teoría de números y matemática discreta</li>
                <li>Optimización y técnicas avanzadas</li>
              </ul>
              
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Duración estimada:</strong> 12-16 semanas
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)',
                  marginBottom: '10px'
                }}>
                  <strong>Prerrequisitos:</strong> Algoritmos intermedios
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--gray-medium)'
                }}>
                  <strong>Nivel:</strong> Avanzado
                </div>
              </div>
            </div>
            
            <a 
              href="https://omegaup.com/course/introduccion_a_algoritmos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                textDecoration: 'none',
                width: '100%',
                background: '#dc3545',
                borderColor: '#dc3545'
              }}
            >
              <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
              Comenzar Ruta del Hacker
            </a>
          </div>
        </div>

        {/* Recursos adicionales */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: 'var(--border-radius)',
          border: '2px solid var(--omegaup-primary)'
        }}>
          <h3 style={{ 
            fontSize: '1.6rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Recursos Adicionales
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-book-open" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Biblioteca de Problemas
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Miles de problemas clasificados por dificultad y tema para práctica continua
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-video" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Tutoriales en Video
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Explicaciones visuales de algoritmos y técnicas de programación competitiva
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-users" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Foros de Discusión
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Comunidad activa para resolver dudas y compartir conocimientos
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                <i className="fas fa-medal" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.2rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Competencias Regulares
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Eventos competitivos para poner en práctica las habilidades aprendidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
