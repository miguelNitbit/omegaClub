import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Beneficios de Participar
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: 'var(--gray-medium)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Descubre las ventajas únicas que ofrecen los Clubes de Programación omegaUp 
            para estudiantes, docentes y líderes de instituciones educativas.
          </p>
        </div>

        {/* Beneficios por audiencia */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Para Estudiantes */}
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
                <i className="fas fa-graduation-cap" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '5px'
              }}>
                Para Estudiantes
              </h3>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--omegaup-secondary)',
                margin: 0
              }}>
                Preparatoria y Universidad
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Desarrollo Académico:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Rutas de aprendizaje estructuradas y progresivas</li>
                <li>Preparación para competencias nacionales e internacionales</li>
                <li>Desarrollo de pensamiento algorítmico y lógico</li>
                <li>Habilidades de resolución de problemas complejos</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Desarrollo Personal:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Comunidad de programadores con intereses similares</li>
                <li>Networking con estudiantes de todo México</li>
                <li>Oportunidades de liderazgo y mentoría</li>
                <li>Preparación para el futuro tecnológico</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Ventajas Competitivas:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>Ventaja en admisiones universitarias</li>
                <li>Fortalecimiento del CV académico y profesional</li>
                <li>Acceso a oportunidades laborales exclusivas</li>
                <li>Reconocimiento a nivel nacional</li>
              </ul>
            </div>
          </div>

          {/* Para Docentes */}
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
                <i className="fas fa-chalkboard-teacher" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '5px'
              }}>
                Para Docentes
              </h3>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--omegaup-secondary)',
                margin: 0
              }}>
                Educadores e Instituciones
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Recursos Pedagógicos:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Currículo estructurado y validado por expertos</li>
                <li>Materiales didácticos de alta calidad</li>
                <li>Herramientas de evaluación automática</li>
                <li>Soporte técnico y pedagógico continuo</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Desarrollo Profesional:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Red nacional de educadores en programación</li>
                <li>Capacitación continua en metodologías modernas</li>
                <li>Reconocimiento por innovación educativa</li>
                <li>Oportunidades de crecimiento profesional</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Impacto Institucional:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>Posicionamiento como institución innovadora</li>
                <li>Atracción de estudiantes talentosos</li>
                <li>Mejora en indicadores académicos</li>
                <li>Conexión con el ecosistema tecnológico nacional</li>
              </ul>
            </div>
          </div>

          {/* Para Líderes */}
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
                <i className="fas fa-users-cog" style={{ color: 'white', fontSize: '1.5rem' }}></i>
              </div>
              <h3 style={{ 
                fontSize: '1.4rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '5px'
              }}>
                Para Líderes de Club
              </h3>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--omegaup-secondary)',
                margin: 0
              }}>
                Facilitadores y Organizadores
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Habilidades de Liderazgo:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Desarrollo de habilidades organizacionales</li>
                <li>Experiencia en gestión de comunidades</li>
                <li>Capacidades de comunicación y motivación</li>
                <li>Liderazgo de equipos multidisciplinarios</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
              Reconocimiento y Prestigio:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                paddingLeft: '20px'
              }}>
                <li>Certificación oficial como "Líder omegaUp"</li>
                <li>Reconocimiento a nivel nacional</li>
                <li>Participación en eventos exclusivos</li>
                <li>Oportunidades de mentoría y coaching</li>
              </ul>

              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '15px'
              }}>
                Ventajas Profesionales:
              </h4>
              <ul style={{ 
                color: 'var(--gray-medium)', 
                fontSize: '0.95rem',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>Diferenciación en el mercado laboral</li>
                <li>Red de contactos en el sector tecnológico</li>
                <li>Experiencia valorada por empleadores</li>
                <li>Desarrollo de soft skills esenciales</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Beneficios generales */}
        <div style={{
          background: 'var(--omegaup-light)',
          padding: '40px',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.6rem',
            color: 'var(--omegaup-primary)',
            marginBottom: '20px'
          }}>
            Beneficios Adicionales para Todos
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            <div>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-certificate" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Certificaciones Oficiales
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Reconocimiento formal de competencias y logros en programación competitiva
              </p>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-globe-americas" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Alcance Nacional
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Conexión con una red de clubes y estudiantes de todo México
              </p>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-rocket" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Crecimiento Acelerado
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Metodologías probadas para el desarrollo rápido de habilidades técnicas
              </p>
            </div>
            
            <div>
              <div style={{ 
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                <i className="fas fa-handshake" style={{ color: 'var(--omegaup-primary)' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                color: 'var(--omegaup-primary)',
                marginBottom: '10px'
              }}>
                Soporte Continuo
              </h4>
              <p style={{ 
                fontSize: '0.95rem',
                color: 'var(--gray-medium)',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Acompañamiento permanente del equipo omegaUp y la comunidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
