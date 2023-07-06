import React from 'react';
import Title from '../Title';
import ListOfProjects from '../ListOfProjects';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio_container">
      <Title number="03">{t('portfolio.title')}</Title>
      <ListOfProjects />
    </div>
  );
};

export default Portfolio;
