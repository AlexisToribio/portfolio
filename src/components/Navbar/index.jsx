import React, { useContext } from 'react';
import LinkButton from '../LinkButton';
import { menuOptions } from '../../constans/menuOptions';
import ThemeContext from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './styles.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      {theme === 'dark' ? (
        <FiMoon className="icon_mode" onClick={toggleTheme} />
      ) : (
        <FiSun className="icon_mode" onClick={toggleTheme} />
      )}
    </nav>
  );
};

export default Navbar;
