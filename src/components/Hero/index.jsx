import React from 'react';
import LinkButton from '../LinkButton';
import './styles.css';

const Hero = () => {
  return (
    <div className="hero_container">
      <div>
        <h3 className="greeting">Hi, my name is</h3>
        <h1 className="name">Alexis Toribio.</h1>
        <h1 className="feature">I build things for the web.</h1>
        <p className="description">
          I'm a system engineer based in Peru, specializing in building
          exceptional websites.
        </p>
        <LinkButton
          href="mailto:alexistoba21@gmail.com"
          text="Get In Touch"
          standard={true}
        />
      </div>
    </div>
  );
};

export default Hero;
