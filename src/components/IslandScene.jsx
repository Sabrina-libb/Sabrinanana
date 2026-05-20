import Cat from './Cat';
import WelcomeBubble from './WelcomeBubble';

/*
 * IslandScene.jsx — Image-based beach scene
 * /bg-beach.png covers the Mac window with a strong wind-blow
 * SVG filter animating the girl's hair edges.
 * A transparent clickable hotspot sits over the background cat.
 */
function IslandScene() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* ── Hidden SVG: amplified wind filter for dramatic hair blow ── */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="hair-wind" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014 0.08"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                values="3;7;4;9;3"
                dur="3.8s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      {/* ── Beach background with hair wind ── */}
      <img
        src="/bg-beach.png"
        alt="Summer Beach"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'url(#hair-wind)' }}
      />

      {/* ── Welcome dialogue bubble above cat/character ── */}
      <WelcomeBubble />

      {/* ── Clickable cat hotspot over background cat ── */}
      <Cat />
    </div>
  );
}

export default IslandScene;
