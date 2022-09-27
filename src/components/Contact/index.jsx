import React from 'react';
import Title from '../Title';
import LinkButton from '../LinkButton';
import './styles.css';

const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <Title number="04">Contact</Title>
      <div>
        <h1>Get in Touch</h1>
        <p>
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <LinkButton
          href="mailto:alexistoba21@gmail.com"
          text="Say Hello"
          standard={true}
        />
      </div>
    </div>
  );
};

export default Contact;
