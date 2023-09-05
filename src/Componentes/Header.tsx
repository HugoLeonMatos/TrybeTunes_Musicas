// Header.tsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';

function Header() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserName() {
      try {
        const user = await getUser();
        setUserName(user.name);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserName();
  }, []);

  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          Pesquisar
        </NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">
          Favoritos
        </NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">
          Perfil
        </NavLink>
      </nav>
      {userName ? (
        <p data-testid="header-user-name">
          Olá,
          {' '}
          {userName}
          !
        </p>
      ) : (
        <p>Carregando...</p>
      )}
    </header>
  );
}

export default Header;
