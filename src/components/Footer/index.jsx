import React from 'react';
import { rrss } from '../../constans/rrssList';
import './styles.css';

const Footer = () => {
  return (
    <div className="footer_container">
      <ul>
        {rrss.map(({ Icon, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              {Icon}
            </a>
          </li>
        ))}
      </ul>
      <p className="credits">Adapted from the Brittany Chiang Portfolio</p>
    </div>
  );
};

export default Footer;
