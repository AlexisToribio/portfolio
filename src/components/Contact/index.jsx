import React from 'react';
import Title from '../Title';
import LinkButton from '../LinkButton';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="contact_container">
      <Title number="04">{t('contact.title')}</Title>
      <div>
        <h1>{t('contact.subtitle')}</h1>
        <p>{t('contact.content')}</p>
        <LinkButton
          href="mailto:alexistoba21@gmail.com"
          text={t('contact.textButton')}
          standard={true}
        />
      </div>
    </div>
  );
};

export default Contact;
