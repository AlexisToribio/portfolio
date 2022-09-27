import React from 'react';
import './styles.css';

const LinkButton = ({ text, href, standard = false }) => {
  return (
    <a
      className={standard ? 'button_standard' : 'button_container'}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default LinkButton;
