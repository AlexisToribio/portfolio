import React from 'react';
import Title from '../Title';
import './styles.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="about_container">
      <Title number="01">{t('about.title')}</Title>
      <div>
        <div className="about">
          <p>{t('about.content')}</p>
        </div>
        <div className="photo_container">
          <img className="photo" src="/myphoto.jpg" alt={t('about.alt')} />
        </div>
      </div>
    </div>
  );
};

export default About;
