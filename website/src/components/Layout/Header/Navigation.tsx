/**
 * COMPONENTE: Navigation
 * TIPO: Sub-componente de UI
 * PAI: Header
 * RESPONSABILIDADE: Exibir os links de navegação principais.
 */
import React from 'react';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;