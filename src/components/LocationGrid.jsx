import React, { useState } from 'react';
import FloatingCard from './FloatingCard';

export default function LocationGrid() {
  const towns = [
    { name: 'Santo Tomé del Puerto', distance: '0 km (Base local)', isMain: true },
    { name: 'Riaza', distance: '12 km' },
    { name: 'Ayllón', distance: '24 km' },
    { name: 'Buitrago de Lozoya', distance: '26 km' },
    { name: 'Sierra Norte de Madrid', distance: '20 km' },
    { name: 'Sepúlveda', distance: '19 km' },
    { name: 'Prádena', distance: '22 km' },
    { name: 'Boceguillas', distance: '13 km' },
    { name: 'Cerezo de Abajo', distance: '7 km' },
    { name: 'Cerezo de Arriba', distance: '9 km' },
    { name: 'Somosierra', distance: '6 km' },
    { name: 'La Pinilla', distance: '15 km' },
    { name: 'Pedraza', distance: '28 km' },
    { name: 'Segovia', distance: '58 km' },
    { name: 'Aranda de Duero', distance: '55 km' }
  ];

  const [hoveredTown, setHoveredTown] = useState(null);

  return (
    <FloatingCard glowColor="blue" className="local-map-block">
      <h3>Pueblos donde trabajo activamente:</h3>
      <p className="map-hint">Pasa el cursor sobre un pueblo para ver la distancia de cobertura:</p>
      <div className="towns-grid">
        {towns.map((town, idx) => (
          <span 
            key={idx} 
            className={`town-tag ${town.isMain ? 'main-town' : ''}`}
            onMouseEnter={() => setHoveredTown(town)}
            onMouseLeave={() => setHoveredTown(null)}
          >
            {town.name}
          </span>
        ))}
      </div>
      <div className="town-distance-panel">
        <span className="info-icon">📍</span>
        <span className="info-text">
          {hoveredTown ? (
            <span>
              <strong>{hoveredTown.name}</strong>: Cobertura local a <strong>{hoveredTown.distance}</strong> de distancia.
            </span>
          ) : (
            <span>Pasa el cursor sobre un pueblo para ver la distancia de cobertura.</span>
          )}
        </span>
      </div>
    </FloatingCard>
  );
}
