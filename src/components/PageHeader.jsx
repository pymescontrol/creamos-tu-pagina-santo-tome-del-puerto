import React from 'react';

export default function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="page-header-section">
      <div className="container">
        {badge && <span className="section-badge badge-blue">{badge}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
