import React, { useContext } from 'react';
import LinkButton from '../LinkButton';
import { menuOptions } from '../../constans/menuOptions';
import ThemeContext from '../../context/ThemeContext';
import TranslationContext from '../../context/TranslationContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { lang, changeLanguage } = useContext(TranslationContext);

  return (
    <nav className="nav_container">
      {menuOptions.map(({ number, option, href }) => (
        <a className="nav_item" href={href} key={href}>
          <span>{number}. </span>
          {t(`menuOptions.${number}`)}
        </a>
      ))}
      <LinkButton
        href="/Miguel Alexis Toribio Barrueta - CURRICULUM.pdf"
        text="Curriculum"
      />
      {theme === 'dark' ? (
        <FiMoon className="icon_mode" onClick={toggleTheme} />
      ) : (
        <FiSun className="icon_mode" onClick={toggleTheme} />
      )}
      <button className="buttonLang" onClick={changeLanguage}>
        <TbWorld className="icon_mode" />
        <p>{lang}</p>
      </button>
    </nav>
  );
};

export default Navbar;
