import React from 'react';
import Layout from '../components/Layout/layout'; // 1. Importe o Layout

const HomePage: React.FC = () => {
  return (
    // 2. Envolva todo o conteúdo da página com o componente Layout
    <Layout>
      {/* Todo o conteúdo abaixo é passado como 'children' para o Layout */}
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Este é o conteúdo específico da Home Page.</p>
      <p>Você pode adicionar quantos componentes e elementos quiser aqui.</p>
    </Layout>
  );
};

export default HomePage;