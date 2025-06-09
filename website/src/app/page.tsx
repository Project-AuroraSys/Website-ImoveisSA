import React from 'react';
import HomePage from '../pages/HomePage'; 
import '../styles/globals.css'; // Importa estilos globais para padronizar o design do aplicativo

function Page() {
  // O App agora renderiza a HomePage, que por sua vez já contém o Layout completo.
  return <HomePage />;
}

export default Page;