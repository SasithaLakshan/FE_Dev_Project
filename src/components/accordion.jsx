import React, { useState } from 'react';
import './accordion.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <div className="accordion-title"><p>{title}</p></div>
        <div className="accordion-icon">{isOpen ? '-' : '+'}</div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
