import React from 'react';
import Button from '../Button';
import { menuOptions } from '../../constans/menuOptions';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="nav_container">
      {menuOptions.map(({ number, option, href }) => (
        <a className="nav_item" href={href} key={href}>
          <span>{number}. </span>
          {option}
        </a>
      ))}
      <Button text="Resume" />
    </nav>
  );
};

export default Navbar;
