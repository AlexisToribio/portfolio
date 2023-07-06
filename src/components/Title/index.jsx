import React from 'react';
import './styles.css';

const Title = ({ number, children }) => {
  return (
    <h2 className="title">
      <span>{number}. </span>
      {children}
    </h2>
  );
};

export default Title;
