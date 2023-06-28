import React, { useState, useEffect, useContext } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import { menuOptions } from '../../constans/menuOptions';
import LinkButton from '../LinkButton';
import ThemeContext from '../../context/ThemeContext';
import TranslationContext from '../../context/TranslationContext';
import { useTranslation } from 'react-i18next';

import './styles.css';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { lang, changeLanguage } = useContext(TranslationContext);

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
      {!toggleMenu && (
        <BiMenuAltRight onClick={handleSidebar} className="sidebarButton" />
      )}

      <nav className={toggleMenu ? 'sidebar' : 'sidebar sidebarClose'}>
        <AiOutlineClose onClick={handleSidebar} className="sidebarButton" />
        {theme === 'dark' ? (
          <FiMoon className="icon_mode" onClick={toggleTheme} />
        ) : (
          <FiSun className="icon_mode" onClick={toggleTheme} />
        )}
        <button className="buttonLang" onClick={changeLanguage}>
          <TbWorld className="icon_mode" />
          <p>{lang}</p>
        </button>
        {menuOptions.map(({ number, option, href }) => (
          <a className="sidebar_item" href={href} key={href}>
            <span>{number}. </span>
            {t(`menuOptions.${number}`)}
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
