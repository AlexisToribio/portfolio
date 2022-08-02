import React from 'react';
import { rrss } from '../../constans/rrssList';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div className="layout_container">
      <Header />
      <Hero />
      <div>
        <div className="left">
          <ul>
            {rrss.map(({ Icon, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  {Icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>{children}</div>
        <div className="right">
          <div>
            <a href="mailto:alexistoba21@gmail.com">alexistoba21@gmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
