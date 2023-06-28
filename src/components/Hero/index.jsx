import React from 'react';
import LinkButton from '../LinkButton';
import './styles.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero_container">
      <div>
        <h3 className="greeting">{t('hero.greeting')}</h3>
        <h1 className="name">{t('hero.name')}</h1>
        <h1 className="feature">{t('hero.feature')}</h1>
        <p className="description">{t('hero.description')}</p>
        <LinkButton
          href="mailto:alexistoba21@gmail.com"
          text={t('hero.textButton')}
          standard={true}
        />
      </div>
    </div>
  );
};

export default Hero;
