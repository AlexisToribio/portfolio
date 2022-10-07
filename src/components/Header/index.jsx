import React, { useContext } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import ThemeContext from '../../context/ThemeContext';
import './styles.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  // const [scrollup, setScrollUp] = useState(false);

  // useEffect(() => {
  //   let lastScroll = 0;

  //   window.addEventListener('scroll', () => {
  //     const currentScroll = window.scrollY;

  //     if (currentScroll === 0) {
  //       setScrollUp(false);
  //       return;
  //     }

  //     if (
  //       currentScroll > lastScroll &&
  //       !document.getElementById('header').classList.contains('scroll-up')
  //     ) {
  //       setScrollUp(false);
  //     } else if (
  //       currentScroll < lastScroll &&
  //       document.getElementById('header').classList.contains('scroll-up')
  //     ) {
  //       setScrollUp(true);
  //     }

  //     lastScroll = currentScroll;
  //   });
  // });

  return (
    // <header id="header" className={`${scrollup ? 'scroll-up' : ''}`}>
    <header>
      <div>
        <a className="logo_container" href="/">
          <Logo theme={theme} className="logo" />
        </a>
        <Sidebar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
