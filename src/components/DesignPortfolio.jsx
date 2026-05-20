/* ── Simple design image card ── */
function DesignCard({ src, caption, sub }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={caption}
        className="block"
        style={{
          maxWidth: '100%',
          maxHeight: '50vh',
          objectFit: 'contain',
          borderRadius: '4px',
          filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,0.25))',
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <div className="mt-2 text-center">
        <p
          className="font-bold text-pink-600"
          style={{
            fontFamily: "'Press Start 2P', 'Chicago', monospace",
            fontSize: '8px',
          }}
        >
          {caption}
        </p>
        {sub && (
          <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
        )}
      </div>
    </div>
  );
}

const designWorks = [
  { src: '/图片12.png', caption: 'Brand Identity System', sub: 'Hangzhou Boyun Tech — Corporate Visuals' },
  { src: '/图片13.png', caption: 'Creative Direction', sub: 'Jufe University — Campus Poster Series' },
  { src: '/图片14.png', caption: 'Typography Art', sub: 'Motivational Poster — \"Stay Hungry\"' },
  { src: '/图片15.png', caption: 'Event Campaign Design', sub: 'Cultural Festival — Key Visual Identity' },
  { src: '/图片16.png', caption: 'Editorial Layout', sub: 'Magazine Spread — Digital & Print Media' },
  { src: '/图片17.png', caption: 'Visual Identity Suite', sub: 'Brand Collateral & Stationery Design' },
];

function DesignPortfolio() {
  return (
    <div className="flex flex-col" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '13px', color: '#374151' }}>
      {/* ── Y2K Section Banner ── */}
        <div
          className="px-5 py-3 border-b-2 border-pink-300"
          style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC, #FFF0F5)' }}
        >
          <p
            className="font-bold uppercase tracking-wider text-center"
            style={{
              fontFamily: "'Press Start 2P', 'Chicago', monospace",
              fontSize: '10px',
              color: '#C2185B',
              textShadow: '0 0 8px rgba(255,20,147,0.3)',
              lineHeight: '1.8',
            }}
          >
            🎨 GRAPHIC DESIGN PORTFOLIO // 平面设计作品板块
          </p>
          <p
            className="text-center mt-1"
            style={{
              fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
              fontSize: '13px',
              color: '#888',
            }}
          >
            视觉创意封存。直铺展示我以前为社团和公司设计制作的宣传海报、画册与创意排版。
          </p>
        </div>

        <div className="p-6 overflow-y-auto modal-scroll" style={{ maxHeight: '55vh' }}>
          <div className="space-y-6">
          {designWorks.map((item, i) => (
            <DesignCard key={`design-${i}`} src={item.src} caption={item.caption} sub={item.sub} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignPortfolio;
