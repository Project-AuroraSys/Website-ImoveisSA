/**
 * COMPONENTE: Logo
 * TIPO: Sub-componente de UI
 * PAI: Header
 * RESPONSABILIDADE: Exibir o logo do site.
 */
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a href="/" style={{ textDecoration: 'none', color: '#1a202c', fontWeight: 'bold', fontSize: '1.5rem' }}>
        NossaLogo
      </a>
    </div>
  );
};

export default Logo;