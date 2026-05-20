import { useState, useEffect } from 'react';

function WelcomeScreen({ onLoaded }) {
  const [fadingOut, setFadingOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 500);
    const fadeTimer = setTimeout(() => setFadingOut(true), 2200);
    const doneTimer = setTimeout(() => onLoaded(), 3000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`welcome-screen${fadingOut ? ' welcome-fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff5ba8 0%, #e81c7c 50%, #c4005a 100%)',
      }}
    >
      {/* Spinning Y2K heart */}
      <div
        className="welcome-heart"
        style={{
          fontSize: '48px',
          animation: 'welcomeHeartSpin 1.2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.7)) drop-shadow(0 0 36px rgba(255,105,180,0.5))',
          marginBottom: '28px',
        }}
      >
        ♥
      </div>

      {/* Pixel progress bar */}
      <div
        style={{
          width: '200px',
          height: '10px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '5px',
          border: '2px solid rgba(255,255,255,0.4)',
          overflow: 'hidden',
          marginBottom: '24px',
        }}
      >
        <div
          className="welcome-progress-fill"
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #fff, #FFB6C1, #fff)',
            borderRadius: '3px',
            width: '0%',
            animation: 'welcomeProgress 2s ease-out forwards',
          }}
        />
      </div>

      {/* Text */}
      <p
        className={`welcome-text${showText ? ' welcome-text-visible' : ''}`}
        style={{
          fontFamily: "'Press Start 2P', 'Chicago', monospace",
          fontSize: '13px',
          color: '#fff',
          textShadow: '0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(255,105,180,0.4)',
          letterSpacing: '2px',
          opacity: 0,
          transform: 'translateY(8px)',
        }}
      >
        开始探索吧
      </p>
    </div>
  );
}

export default WelcomeScreen;
