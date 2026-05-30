import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="page-container">
      {/* Fondo de rejilla digital y luces neón de fondo */}
      <div className="noise" aria-hidden="true"></div>
      <div className="glow-bg" aria-hidden="true">
        <div className="glow-spot spot-green"></div>
        <div className="glow-spot spot-blue"></div>
        <div className="glow-spot spot-amber"></div>
      </div>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
