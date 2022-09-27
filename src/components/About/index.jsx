import React from 'react';
import Title from '../Title';
import './styles.css';

const About = () => {
  return (
    <div id="about" className="about_container">
      <Title number="01">About Me</Title>
      <div>
        <div className="about">
          <p>
            Hi, my name is Alexis, I live in Peru. Since I was a child I was
            passionate about the world of technology and I was always curious
            about how to create so much wonder, the more I discovered the
            immense amount of things that could be done, I decided to dedicate
            myself to web development (frontend and backend) because in this
            specialty you can let your imagination fly. My goal is to continue
            growing as a person and professional.
          </p>
        </div>
        <div className="photo_container">
          <img className="photo" src="/myphoto.jpg" alt="myphoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
