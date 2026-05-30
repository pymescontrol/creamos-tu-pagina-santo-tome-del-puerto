import React from 'react';
import FloatingCard from './FloatingCard';

export default function ServiceCard({ icon, title, description, glowColor = 'green' }) {
  return (
    <FloatingCard glowColor={glowColor} className="solution-card">
      <div className={`solution-icon-box icon-${glowColor}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </FloatingCard>
  );
}
