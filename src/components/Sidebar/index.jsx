import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { menuOptions } from '../../constans/menuOptions';
import Button from '../Button';
import './styles.css';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        {menuOptions.map(({ number, option, href }) => (
          <a className="sidebar_item" href={href} key={href}>
            <span>{number}. </span>
            {option}
          </a>
        ))}
        <Button text="Resume" />
      </nav>
    </>
  );
};

export default Sidebar;
