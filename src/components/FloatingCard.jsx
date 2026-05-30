import React from 'react';

export default function FloatingCard({ children, className = '', glowColor = 'green' }) {
  return (
    <div className={`glass-card ${className}`}>
      {/* Borde neón con glow en hover */}
      <div className={`card-glow-border border-${glowColor}`}></div>
      {children}
    </div>
  );
}
