import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca', label: 'Acerca de' },
    { id: 'como-funciona', label: 'Cómo Funciona' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'inscripcion', label: 'Inscripción' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--omegaup-light)' : 'none',
      padding: '15px 0',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('inicio')}
            style={{ 
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--omegaup-primary)'
            }}
          >
            omega<span style={{ color: 'var(--omegaup-secondary)' }}>Up</span>
          </div>

          {/* Menu items */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--gray-medium)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--omegaup-primary)';
                  e.target.style.background = 'var(--omegaup-light)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--gray-medium)';
                  e.target.style.background = 'none';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu - simplified for now */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav > div > div > div:last-child {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
