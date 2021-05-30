import React from "react";
import "../App.scss"

const TemplateCard = ({template}) => {
  const {name, created, category, description, link} = template;
  const date = new Date(created).toLocaleDateString()
  return (
    <div className="template-card">
      <h3 className="name">{name} form template</h3>
      <span className="category">{category}</span>
      <p className="description">{description}</p>
      <span className="date-created">{date}</span>
      <div className="cta-container">
      <a href={link} target="_blank" rel="noopener noreferrer" className="template-cta">Use Template</a>
      </div>
     
    </div>
  );
};

export default TemplateCard;
