import React from 'react';
import Title from '../Title';
import ItemSkill from '../ItemSkill';
import { skills } from '../../constans/skillsList';
import './styles.css';

const Skills = () => {
  return (
    <div id="skills" className="skills_container">
      <Title number="02">Skills</Title>
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
