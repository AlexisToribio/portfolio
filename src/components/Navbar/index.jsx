import React from 'react';
import LinkButton from '../LinkButton';
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
      <LinkButton
        href="/Miguel Alexis Toribio Barrueta - CURRICULUM.pdf"
        text="Resume"
      />
    </nav>
  );
};

export default Navbar;
