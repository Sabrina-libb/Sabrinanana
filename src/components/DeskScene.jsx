import { useState, useEffect, useMemo } from 'react';
import MacScreen from './MacScreen';
import WindowManager from './WindowManager';
import { useWindowStore } from '../windowStore';

/* ── Animation wrapper: entrance + float + spark ── */
function WidgetWrap({ children, posStyle, floatDelay, entranceDelay }) {
  return (
    <div
      className="entrance-bounce"
      style={{
        position: 'absolute',
        ...posStyle,
        animationDelay: `${entranceDelay}s`,
        zIndex: 20,
      }}
    >
      <div
        className="float-anim y2k-clickable-wrapper"
        style={{ animationDelay: `${floatDelay}s` }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Inline image-widget: PNG asset + click → open window ── */
function ImgWidget({ src, windowId, style }) {
  const triggerWindow = useWindowStore((s) => s.triggerWindow);
  return (
    <button
      onClick={() => triggerWindow(windowId)}
      className="y2k-interactive-btn block"
      style={{ position: 'relative', ...style }}
    >
      <img src={src} alt="" className="w-full h-full object-contain drop-shadow-y2k" />
    </button>
  );
}

/* ── Scattered Y2K pink hearts ── */
const hearts = [
  { left: '4%', top: '12%', size: 16, rot: -15, delay: '0s' },
  { left: '9%', top: '28%', size: 11, rot: 8, delay: '0.3s' },
  { left: '3%', top: '48%', size: 14, rot: -5, delay: '0.7s' },
  { left: '10%', top: '68%', size: 10, rot: 20, delay: '0.2s' },
  { left: '5%', top: '82%', size: 13, rot: -10, delay: '0.5s' },
  { right: '5%', top: '10%', size: 15, rot: 12, delay: '0.4s' },
  { right: '9%', top: '32%', size: 10, rot: -18, delay: '0.1s' },
  { right: '4%', top: '54%', size: 14, rot: 8, delay: '0.6s' },
  { right: '8%', top: '72%', size: 11, rot: -8, delay: '0.3s' },
  { right: '3%', top: '88%', size: 12, rot: 15, delay: '0.8s' },
];

function DeskScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const hasClicked = useWindowStore((s) => s.hasClicked);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const get3DStyle = (depthFactor, rotateFactor = 10) => ({
    display: 'block',
    transform: `
      perspective(1000px)
      translateX(${mousePos.x * depthFactor * 20}px)
      translateY(${mousePos.y * depthFactor * 20}px)
      rotateX(${-mousePos.y * rotateFactor}deg)
      rotateY(${mousePos.x * rotateFactor}deg)
    `,
    transition: 'transform 0.1s ease-out',
    willChange: 'transform',
  });

  return (
    <div className="desk-scene">
      {/* ── Full-screen dark overlay ── */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" style={{ zIndex: 5 }} />

      {/* ── Y2K scattered hearts ── */}
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: h.left,
            right: h.right,
            top: h.top,
            fontSize: h.size,
            transform: `rotate(${h.rot}deg)`,
            animation: `widgetFloat 3s ease-in-out infinite`,
            animationDelay: h.delay,
            opacity: 0.35,
            color: '#FF69B4',
          }}
        >
          ♥
        </span>
      ))}

      {/* ── Floating drifting hearts ── */}
      {[
        { left: '10%', size: 18, anim: 'floating-heart-1', delay: '0s' },
        { left: '25%', size: 14, anim: 'floating-heart-2', delay: '2s' },
        { left: '40%', size: 20, anim: 'floating-heart-3', delay: '4s' },
        { left: '55%', size: 12, anim: 'floating-heart-1', delay: '1s' },
        { left: '70%', size: 16, anim: 'floating-heart-2', delay: '5s' },
        { left: '85%', size: 22, anim: 'floating-heart-3', delay: '3s' },
        { left: '15%', size: 13, anim: 'floating-heart-2', delay: '6s' },
        { left: '60%', size: 17, anim: 'floating-heart-1', delay: '7s' },
        { left: '35%', size: 15, anim: 'floating-heart-3', delay: '3.5s' },
        { left: '78%', size: 19, anim: 'floating-heart-1', delay: '1.5s' },
      ].map((h, i) => (
        <span
          key={`drift-${i}`}
          className="absolute pointer-events-none select-none"
          style={{
            left: h.left,
            bottom: '-5%',
            fontSize: h.size,
            animation: `${h.anim} ${7 + i * 0.7}s linear infinite`,
            animationDelay: h.delay,
            color: '#FF69B4',
          }}
        >
          ♥
        </span>
      ))}

      {/* ════════════════════════════════════════════════════════════
          LEFT COLUMN — float + entrance + 3D parallax
          ════════════════════════════════════════════════════════════ */}
      {/* Top — Pink Polaroid → experience */}
      <WidgetWrap posStyle={{ left: '2%', top: '11%' }} floatDelay={0} entranceDelay={0}>
        <div style={get3DStyle(1.2, 15)}>
          <ImgWidget src="/image_42.png" windowId="experience" style={{ width: '232px' }} />
        </div>
      </WidgetWrap>

      {/* Mid — Pink Envelope → data analysis */}
      <WidgetWrap posStyle={{ left: '3%', top: '35.5%' }} floatDelay={0.3} entranceDelay={0.12}>
        <div style={get3DStyle(1.0, 12)}>
          <ImgWidget src="/image_43.png" windowId="dataAnalysis" style={{ width: '187px' }} />
        </div>
      </WidgetWrap>

      {/* Bottom — Cat in Polaroid → about */}
      <WidgetWrap posStyle={{ left: '8%', bottom: '12%' }} floatDelay={0.6} entranceDelay={0.24}>
        <div style={{
          transform: `perspective(1000px) translateX(${mousePos.x * 0.9 * 20}px) translateY(${mousePos.y * 0.9 * 20}px) rotateX(${-mousePos.y * 11}deg) rotateY(${mousePos.x * 11}deg) rotate(-8deg)`,
          transition: 'transform 0.1s ease-out', willChange: 'transform',
        }}>
          <ImgWidget src="/image_44.png" windowId="about" style={{ width: '96px' }} />
        </div>
      </WidgetWrap>

      {/* ════════════════════════════════════════════════════════════
          RIGHT COLUMN — float + entrance + 3D parallax
          ════════════════════════════════════════════════════════════ */}
      {/* Top — Blank Polaroid Stack → gallery */}
      <WidgetWrap posStyle={{ right: '2%', top: '15%' }} floatDelay={0.15} entranceDelay={0.06}>
        <div style={{
          transform: `perspective(1000px) translateX(${mousePos.x * 1.1 * 20}px) translateY(${mousePos.y * 1.1 * 20}px) rotateX(${-mousePos.y * 14}deg) rotateY(${mousePos.x * 14}deg) rotate(30deg)`,
          transition: 'transform 0.1s ease-out', willChange: 'transform',
        }}>
          <ImgWidget src="/image_45.png" windowId="gallery" style={{ width: '258px' }} />
        </div>
      </WidgetWrap>

      {/* Bottom — Pink iPod → design portfolio */}
      <WidgetWrap posStyle={{ right: '3%', bottom: '10%' }} floatDelay={0.45} entranceDelay={0.18}>
        <div style={get3DStyle(1.0, 13)}>
          <ImgWidget src="/image_46.png" windowId="designPortfolio" style={{ width: '160px' }} />
        </div>
      </WidgetWrap>

      {/* ── Pixel Tooltip bubble (above MP3) ── */}
      {!hasClicked && (
        <div
          className={`pixel-tooltip ${hasClicked ? 'fade-out' : ''}`}
          style={{ right: '6%', bottom: '22%' }}
        >
          <div
            className="px-4 py-2.5 rounded-lg border-2 border-pink-400 bg-white/95"
            style={{
              fontFamily: "'Press Start 2P', 'Chicago', monospace",
              fontSize: '10px',
              color: '#FF1493',
              textShadow: '0 0 10px rgba(255,20,147,0.5), 0 0 20px rgba(255,105,180,0.3)',
              boxShadow: '0 6px 20px rgba(255,20,147,0.35), 0 0 0 6px rgba(255,182,193,0.2)',
            }}
          >
            [ CLICK ME! 👾 ]
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          CENTER — Mac Window with Beach Scene
          ════════════════════════════════════════════════════════════ */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 30, pointerEvents: 'none', ...get3DStyle(0.5, 5) }}>
        <MacScreen />
      </div>

      {/* ── Window manager ── */}
      <WindowManager />
    </div>
  );
}

export default DeskScene;
