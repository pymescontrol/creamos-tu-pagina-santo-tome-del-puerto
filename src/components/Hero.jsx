import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0, scale: 1 });
  
  // Estados para el reproductor de vídeo interactivo
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5); // Volumen inicial
  const [isMuted, setIsMuted] = useState(true); // Autoplay silenciado
  const [showControls, setShowControls] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const restartVideo = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && volume === 0) {
      setVolume(0.5);
      videoRef.current.volume = 0.5;
    }
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume > 0) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    setRotate({ x: rotateX, y: rotateY, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0, scale: 1 });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text-block">
          <div className="badge-glow">
            <span className="badge-dot"></span>
            <span className="badge-text">Diseño web profesional y cercano</span>
          </div>
          <h1>
            Páginas web profesionales en <span className="gradient-text text-glow-green">Santo Tomé del Puerto</span> para negocios de la Sierra
          </h1>
          <p className="hero-subtitle">
            Creo webs modernas, claras y preparadas para que tus clientes te encuentren, confíen en tu negocio y contacten contigo desde el móvil.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary btn-glow-green">
              <span>Quiero mi página web</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/servicios" className="btn btn-secondary">
              <span>Ver servicios</span>
            </Link>
          </div>
          <p className="hero-secondary-text">
            Trabajo desde Santo Tomé del Puerto para negocios de Riaza, Ayllón, Buitrago de Lozoya, Sepúlveda, Boceguillas, la Sierra Norte, Segovia, Aranda de Duero y pueblos cercanos.
          </p>
        </div>

        {/* Hero Visual Stack con 3D tilt */}
        <div 
          className="hero-visual-block" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="visual-wrapper"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${rotate.scale})`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Tarjeta principal simuladora / Reproductor de Vídeo */}
            <div className="glass-card mockup-card" style={{ padding: 0 }}>
              <div className="mockup-header">
                <div className="dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="search-bar">daiaxme.com/presentacion.mp4</div>
              </div>
              <div className="mockup-body" style={{ padding: 0 }}>
                <div 
                  style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                  onClick={() => setShowControls(!showControls)}
                >
                  <video 
                    ref={videoRef}
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer' }}
                    onClick={togglePlay}
                  >
                    <source src="./video.mp4" type="video/mp4" />
                    {/* Fallback de demostración con video de bucle neón de alta calidad */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41857-large.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de vídeos.
                  </video>

                  {/* Barra de controles personalizada */}
                  <div 
                    className="custom-video-controls"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'rgba(8, 12, 18, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '10px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      opacity: showControls ? 1 : 0,
                      transform: showControls ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      zIndex: 10,
                      pointerEvents: showControls ? 'auto' : 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Controles izquierdos: Play/Pause, Reiniciar */}
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                      <button 
                        onClick={togglePlay} 
                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        aria-label={isPlaying ? "Pausar" : "Reproducir"}
                      >
                        {isPlaying ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        )}
                      </button>

                      <button 
                        onClick={restartVideo}
                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        aria-label="Reiniciar"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
                      </button>
                    </div>

                    {/* Controles derechos: Volumen y Mute */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <button 
                        onClick={toggleMute}
                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        aria-label={isMuted ? "Desactivar silencio" : "Activar silencio"}
                      >
                        {isMuted || volume === 0 ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                        )}
                      </button>

                      <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        style={{
                          width: '70px',
                          height: '4px',
                          background: 'rgba(255,255,255,0.2)',
                          outline: 'none',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          accentColor: 'var(--green-neon)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mockup-glow-bar" style={{ bottom: 0, top: 'auto', zIndex: 5 }}></div>
                </div>
              </div>
            </div>

            {/* Tarjeta flotante 1 */}
            <div className="glass-card stat-card card-top-right">
              <div className="stat-icon icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-num text-blue-glow">100%</div>
                <div className="stat-label">Adaptado a Móvil</div>
              </div>
            </div>

            {/* Tarjeta flotante 2 */}
            <div className="glass-card stat-card card-bottom-left">
              <div className="stat-icon icon-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-num text-green-glow">Cercano</div>
                <div className="stat-label">S. Tomé y la Sierra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
