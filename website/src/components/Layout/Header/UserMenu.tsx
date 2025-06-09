/**
 * COMPONENTE: UserMenu
 * TIPO: Sub-componente de UI
 * PAI: Header
 * PROPS: { user: User }
 * RESPONSABILIDADE: Exibir informações do usuário logado (avatar e nome).
 */
import React from 'react';

// Interface para definir o formato do objeto de usuário
export interface User {
  name: string;
  avatarUrl?: string; // O avatar é opcional
}

interface UserMenuProps {
  user: User;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  // Função para pegar as iniciais do nome
  const getInitials = (name: string) => {
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="user-menu" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div className="avatar" style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#cbd5e0',
        color: '#4a5568',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        overflow: 'hidden'
      }}>
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={`Avatar de ${user.name}`} style={{ width: '100%', height: '100%' }} />
        ) : (
          <span>{getInitials(user.name)}</span>
        )}
      </div>
      <span style={{ fontWeight: '500' }}>{user.name}</span>
    </div>
  );
};

export default UserMenu;