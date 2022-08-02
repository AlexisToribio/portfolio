import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import './styles.css';

const Header = () => {
  return (
    <header>
      <a href="/">
        <Logo className="logo" />
      </a>
      <Sidebar />
      <Navbar />
    </header>
  );
};

export default Header;
