import React from 'react';
import './styles.css';

const ItemSkill = ({ img, title, description }) => {
  return (
    <div className="skill_item">
      <div className="image_container">
        <img className="skill_image" src={img} alt={title} />
      </div>
      <div className="skill_description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemSkill;
