/*
  Arquivo: src/components/layout/Header.tsx
*/

/**
 * COMPONENTE: Header
 * TIPO: Layout Component
 * PAI: Layout
 * FILHOS: Logo, Navigation, UserMenu
 * PROPS: { user?, theme? }
 * RESPONSABILIDADE: Cabeçalho principal do site
 */

// COMPONENTE FILHO de: Layout
// USADO EM: Layout.tsx

import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu, { User } from './UserMenu'; // Importa o componente e o tipo

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      width: '100%'
    }}>
      <Logo />
      <Navigation />
      <UserMenu user={user} />
    </header>
  );
};

export default Header;