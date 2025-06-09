/**
 * COMPONENTE: Footer
 * TIPO: Layout Component
 * PAI: Layout
 * FILHOS: Nenhum
 * PROPS: {}
 * RESPONSABILIDADE: Rodapé do site, exibe informações de direitos autorais e links adicionais
 */

import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5' }}>
    © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
  </footer>
);

export default Footer;