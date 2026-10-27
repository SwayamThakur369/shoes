import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCw, Sparkles, Layers, Eye, RefreshCw, ZoomIn } from 'lucide-react';

export default function ShoeVideoCard({
  activeColorway,
  onSelectColorway,
  colorways,
  videoSrc = '/shoe-loop-1.mp4'
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [filterMode, setFilterMode] = useState('normal'); // 'normal' | 'wireframe' | 'blueprint'

  const startDragX = useRef(0);
  const startTime = useRef(0);

  const hotspots = [
    {
      id: "toebox",
      title: "Anatomical Toe Cap",
      desc: "Streamlined forward rocker profile ensuring natural toe splay and explosive propulsion.",
      style: { top: '38%', right: '24%' }
    },
    {
      id: "midsole",
      title: "Dual-Density Cushioning",
      desc: "Supercritical responsive foam engineered to absorb heel strikes and return kinetic energy.",
      style: { bottom: '28%', left: '46%' }
    },
    {
      id: "heel",
      title: "Sculpted Heel Counter",
      desc: "High-camber collar provides anatomical Achilles lock with zero heel-slip.",
      style: { top: '34%', left: '22%' }
    }
  ];

  // Mouse move 3D tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Smooth subtle tilt
    setMouseTilt({ x: -y * 14, y: x * 18 });

    // If dragging, scrub the video time to feel like manual 360 rotation!
    if (isDragging && videoRef.current && videoRef.current.duration) {
      const deltaX = (e.clientX - startDragX.current) / rect.width;
      const duration = videoRef.current.duration;
      let newTime = (startTime.current + deltaX * duration * 2) % duration;
      if (newTime < 0) newTime += duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startDragX.current = e.clientX;
    if (videoRef.current) {
      startTime.current = videoRef.current.currentTime;
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Touch controls for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      startDragX.current = e.touches[0].clientX;
      if (videoRef.current) {
        startTime.current = videoRef.current.currentTime;
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1 && videoRef.current && videoRef.current.duration) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const deltaX = (e.touches[0].clientX - startDragX.current) / rect.width;
      const duration = videoRef.current.duration;
      let newTime = (startTime.current + deltaX * duration * 2) % duration;
      if (newTime < 0) newTime += duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    if (isDragging) {
      setIsDragging(false);
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const resetAngle = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Determine dynamic accent color glow
  const accentColor = activeColorway ? activeColorway.hex : '#E2F13C';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '520px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, #151821 0%, #090a0d 100%)',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        perspective: '1200px'
      }}
    >
      {/* Dynamic 3D ambient glow based on selected colorway */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
          transition: 'background 0.5s ease'
        }}
      />

      {/* 3D Tilted Inner Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `perspective(1000px) rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none'
        }}
      >
        {/* Looping 3D Sneaker Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '92%',
            height: '92%',
            objectFit: 'contain',
            borderRadius: 'var(--radius-lg)',
            filter: filterMode === 'wireframe'
              ? 'contrast(200%) brightness(1.2) hue-rotate(90deg) drop-shadow(0 0 15px var(--accent))'
              : filterMode === 'blueprint'
              ? 'invert(1) hue-rotate(180deg) brightness(0.9) contrast(150%)'
              : 'drop-shadow(0 20px 35px rgba(0,0,0,0.85))',
            transition: 'filter 0.3s ease'
          }}
        />

        {/* 3D Ground Contact Shadow */}
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            width: '65%',
            height: '24px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 75%)',
            filter: 'blur(8px)',
            pointerEvents: 'none'
          }}
        />

        {/* Rotating Ground Hologram Ring */}
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            width: '360px',
            height: '140px',
            borderRadius: '50%',
            border: `1px dashed ${accentColor}40`,
            transform: 'rotateX(75deg)',
            pointerEvents: 'none',
            boxShadow: `0 0 30px ${accentColor}15`
          }}
        />

        {/* Floating 3D Hotspot Pins */}
        {hotspots.map((h) => {
          const isActive = activeHotspot?.id === h.id;
          return (
            <div
              key={h.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(isActive ? null : h);
              }}
              style={{
                position: 'absolute',
                ...h.style,
                pointerEvents: 'auto',
                cursor: 'pointer',
                zIndex: 15
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--accent)' : 'rgba(10, 11, 14, 0.85)',
                  border: `2px solid ${isActive ? '#000' : 'var(--accent)'}`,
                  color: isActive ? '#000' : 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(226, 241, 60, 0.4)',
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Sparkles size={13} />
              </div>

              {/* Pulsing halo */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  border: `1px solid ${accentColor}`,
                  animation: 'pulseGlow 2s infinite ease-out',
                  pointerEvents: 'none'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Hotspot detail popup card */}
      {activeHotspot && (
        <div
          className="glass-card animate-slide-down"
          style={{
            position: 'absolute',
            bottom: '7.5rem',
            left: '1.25rem',
            maxWidth: '320px',
            padding: '1.1rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--accent)',
            zIndex: 25,
            pointerEvents: 'auto'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span className="badge badge-accent" style={{ fontSize: '0.65rem' }}>3D SPEC FOCUS</span>
            <button
              onClick={() => setActiveHotspot(null)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1rem' }}
            >
              ✕
            </button>
          </div>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            {activeHotspot.title}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {activeHotspot.desc}
          </p>
        </div>
      )}

      {/* Top HUD Controls */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          zIndex: 20
        }}
      >
        <button
          onClick={togglePlay}
          className="badge badge-dark"
          style={{
            cursor: 'pointer',
            padding: '0.45rem 0.75rem',
            background: isPlaying ? 'rgba(226, 241, 60, 0.15)' : 'rgba(0,0,0,0.6)',
            borderColor: isPlaying ? 'var(--accent)' : 'var(--border-subtle)',
            color: isPlaying ? 'var(--accent)' : 'var(--text-secondary)'
          }}
          title={isPlaying ? "Pause Rotation" : "Play Rotation"}
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          <span>{isPlaying ? "3D SPIN: ON" : "PAUSED"}</span>
        </button>

        <button
          onClick={() => setFilterMode(filterMode === 'wireframe' ? 'normal' : 'wireframe')}
          className="badge badge-dark"
          style={{
            cursor: 'pointer',
            padding: '0.45rem 0.75rem',
            background: filterMode === 'wireframe' ? 'rgba(226, 241, 60, 0.25)' : 'rgba(0,0,0,0.6)',
            borderColor: filterMode === 'wireframe' ? 'var(--accent)' : 'var(--border-subtle)',
            color: filterMode === 'wireframe' ? 'var(--accent)' : 'var(--text-secondary)'
          }}
          title="Toggle Technical View"
        >
          <Layers size={13} />
          <span>{filterMode === 'wireframe' ? "MATRIX: ACTIVE" : "X-RAY MATRIX"}</span>
        </button>

        <button
          onClick={resetAngle}
          className="badge badge-dark"
          style={{
            cursor: 'pointer',
            padding: '0.45rem 0.75rem',
            background: 'rgba(0,0,0,0.6)'
          }}
          title="Reset to Start"
        >
          <RefreshCw size={13} />
          <span>RESET ANGLE</span>
        </button>
      </div>

      {/* Drag & Scrub Guidance Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Eye size={13} color="var(--accent)" />
          <span>DRAG HORIZONTALLY TO SCRUB 360°</span>
        </div>
        <span>•</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Sparkles size={13} color="var(--accent)" />
          <span>CLICK PINS FOR SPECS</span>
        </div>
      </div>

      {/* Colorway Switcher HUD */}
      {colorways && colorways.length > 0 && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 0.85rem',
            borderRadius: 'var(--radius-pill)',
            zIndex: 20
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)', marginRight: '0.2rem' }}>
            COLORWAY:
          </span>
          {colorways.map((c) => (
            <button
              key={c.code}
              onClick={() => onSelectColorway(c)}
              title={c.name}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.hex} 50%, ${c.accentHex} 50%)`,
                border: activeColorway?.code === c.code ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.2)',
                boxShadow: activeColorway?.code === c.code ? '0 0 12px var(--accent-glow)' : 'none',
                cursor: 'pointer',
                transform: activeColorway?.code === c.code ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
