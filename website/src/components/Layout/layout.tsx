/**
 * COMPONENTE: Layout
 * TIPO: Layout Component
 * PAI: Layout
 * FILHOS: Header, Footer
 * PROPS: { children }
 * RESPONSABILIDADE: Fornecer uma estrutura de layout para o aplicativo, incluindo cabeçalho e rodapé
 */

import React from 'react';
import Header from './Header'; // 
import Footer from './Footer';

// Dados de exemplo para o usuário
const mockUser = {
  name: 'Ana Silva',
  // avatarUrl: 'https://i.pravatar.cc/40' // URL de um avatar de exemplo
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header user={mockUser} />
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Exportando o Layout para ser usado em outras partes do aplicativo
export default Layout;