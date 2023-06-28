import React from 'react';
import Title from '../Title';
import ItemSkill from '../ItemSkill';
import { skills } from '../../constans/skillsList';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div id="skills" className="skills_container">
      <Title number="02">{t('skills.title')}</Title>
      <div className="skills_grid">
        {skills.map(({ img, title, description }) => (
          <ItemSkill
            img={img}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
