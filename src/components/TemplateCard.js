import React from "react";

const TemplateCard = ({template}) => {
  const {name, created, category, description, link} = template;
  return (
    <div className="template-card">
      <h3 className="name">{name}</h3>
      <span className="category">{category}</span>
      <p className="description">{description}</p>
      <span>{created}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className="template-cta">Use Template</a>
    </div>
  );
};

export default TemplateCard;
