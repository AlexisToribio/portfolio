import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ContactNetworks from '../ContactNetworks';
import ArrowUp from '../ArrowUp';
import './styles.css';

const Layout = ({ theme, children }) => {
  return (
    <div className={`layout_container ${theme}`}>
      <Header />
      <ContactNetworks />
      <div className="children_container">{children}</div>
      <ArrowUp />
      <Footer />
    </div>
  );
};

export default Layout;
