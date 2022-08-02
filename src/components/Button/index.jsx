import React from 'react';
import './styles.css';

const Button = ({ text, onclick, standard = false }) => {
  return (
    <button
      className={standard ? 'button_standard' : 'button_container'}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
