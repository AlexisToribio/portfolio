import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { useArrowUp } from '../../hooks/useArrowUp';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Logo from '../Logo';
import './styles.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { targetRef } = useArrowUp();

  return (
    <header ref={targetRef}>
      <div>
        <a className="logo_container" href="/">
          <Logo theme={theme} className="logo" />
        </a>
        <Navbar />
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
