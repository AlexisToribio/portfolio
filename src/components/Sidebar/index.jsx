import React, { useState, useEffect, useContext } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { menuOptions } from '../../constans/menuOptions';
import LinkButton from '../LinkButton';
import ThemeContext from '../../context/ThemeContext';

import './styles.css';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) setToggleMenu(false);
    });

    toggleMenu
      ? document.body.classList.add('hiden-scroll')
      : document.body.classList.remove('hiden-scroll');
  });

  const handleSidebar = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {toggleMenu ? (
        <AiOutlineClose onClick={handleSidebar} className="sidebarButton" />
      ) : (
        <BiMenuAltRight onClick={handleSidebar} className="sidebarButton" />
      )}
      <nav className={toggleMenu ? 'sidebar' : 'sidebar sidebarClose'}>
        {theme === 'dark' ? (
          <FiMoon className="icon_mode" onClick={toggleTheme} />
        ) : (
          <FiSun className="icon_mode" onClick={toggleTheme} />
        )}
        {menuOptions.map(({ number, option, href }) => (
          <a className="sidebar_item" href={href} key={href}>
            <span>{number}. </span>
            {option}
          </a>
        ))}
        <LinkButton
          href="/Miguel Alexis Toribio Barrueta - CURRICULUM.pdf"
          text="Resume"
          standard={true}
        />
      </nav>
    </>
  );
};

export default Sidebar;
