import React from 'react';
import {Button} from 'bootstrap-4-react/lib/components';
import {NavLink, useLocation} from 'react-router-dom';
import './Menu.css';
import {signOut} from '../../utils/auth';
import {PATH_CHANGE_FORM, PATH_FORM, PATH_PRODUCTS} from '../../utils/constants';

export default function Menu() {
  const {pathname} = useLocation();
  const productsPath = `/${PATH_PRODUCTS}`;
  const formPath = `/${PATH_FORM}`;
  const formPaths = [formPath, `/${PATH_CHANGE_FORM}`];
  return (
    <nav className="menu">
      {pathname !== productsPath && (
        <NavLink to={productsPath} className="menu__link">
          <Button primary>Каталог</Button>
        </NavLink>
      )}
      {!formPaths.includes(pathname) && (
        <NavLink to={formPath} className="menu__link">
          <Button primary>Добавить</Button>
        </NavLink>
      )}

      <NavLink to="/" className="menu__link">
        <Button primary onClick={signOut}>
          Выйти
        </Button>
      </NavLink>
    </nav>
  );
}
