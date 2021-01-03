import React from 'react';
import {Button} from 'bootstrap-4-react/lib/components';
import {NavLink, useLocation} from 'react-router-dom';
import {auth} from '../../firebaseConfig';
import './Menu.css';

export default function Menu() {
  const {pathname} = useLocation();
  const productsPath = '/products';
  const formPath = '/form';
  return (
    <nav className="menu">
      {pathname !== productsPath && (
        <NavLink to={productsPath} className="menu__link">
          <Button primary>Каталог</Button>
        </NavLink>
      )}
      {pathname !== formPath && (
        <NavLink to={formPath} className="menu__link">
          <Button primary>Форма</Button>
        </NavLink>
      )}

      <NavLink to="/" className="menu__link">
        <Button primary onClick={() => auth.signOut()}>
          Выйти
        </Button>
      </NavLink>
    </nav>
  );
}
