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
      <a
        href="https://github.com/bchiang7/v4"
        className="credits"
        target="_blank"
        rel="noreferrer"
      >
        Adapted from the Brittany Chiang Portfolio
      </a>
    </div>
  );
};

export default Footer;
