import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../img/logo.svg';
import cart from '../img/shopping-cart.svg';
import './Navbar.style.css';
import { Search } from './Search.component';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <HashLink to="/#top" className="navbar-logo">
          <img src={logo} alt="Logo Jussi" />
        </HashLink>
        <div className="menu-icon" onClick={handleClick}>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <HashLink to="/#solutions" className="navbar">
                Nossas soluções
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#about" className="navbar">
                Conheça a Jüssi
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="right-bar">
          <Search />
          <Link to="/login">Login</Link>
          <Link to="/checkout">
            <img src={cart} alt="checkout" />
          </Link>
        </div>
      </nav>
    </>
  );
}
