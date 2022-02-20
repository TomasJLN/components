import { useState } from 'react';
import './accordion.css';

export const Accordion = ({ title = 'Title', content = 'Content' }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-head" onClick={() => setIsActive(!isActive)}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-expand">{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <div className="accordion-content fade_in">{content}</div>}
    </div>
  );
};
