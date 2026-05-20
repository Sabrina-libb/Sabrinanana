const photography = [
  { src: '/图片7.png', caption: 'Tokyo Nights', sub: 'Shibuya Crossing // 2024' },
  { src: '/图片8.png', caption: 'Mt. Fuji Views', sub: 'Shizuoka Prefecture // 2024' },
  { src: '/图片9.png', caption: 'Osaka After Dark', sub: 'Dotonbori Canals // 2024' },
  { src: '/图片10.png', caption: 'Kyoto Serenity', sub: 'Fushimi Inari Paths // 2024' },
  { src: '/图片11.png', caption: 'Urban Geometry', sub: 'Tokyo Metro Lines // 2024' },
];

function Gallery() {
  return (
    <div className="flex flex-col" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '13px', color: '#374151' }}>
      {/* ── Y2K Section Banner ── */}
      <div
        className="px-5 py-3 border-b-2 border-pink-300"
        style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC, #FFF0F5)' }}
      >
        <p className="font-bold uppercase text-center" style={{ lineHeight: '1.8' }}>
            <span
              style={{
                fontFamily: "'Press Start 2P', 'Chicago', monospace",
                fontSize: '10px',
                color: '#C2185B',
                textShadow: '0 0 8px rgba(255,20,147,0.3)',
              }}
            >
              🗺️ TRAVEL & PHOTOGRAPHY GALLERY //{' '}
            </span>
            <span
              className="font-bold"
              style={{
                fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
                fontSize: '13px',
                color: '#C2185B',
              }}
            >
              摄影作品板块
            </span>
          </p>
        <p
          className="text-center mt-1"
          style={{ fontSize: '13px', color: '#888' }}
        >
          镜头下的世界。记录我捕捉的日本街景、富士山以及城市夜色，100% 视觉沉浸。
        </p>
      </div>

      <div className="p-6 overflow-y-auto modal-scroll" style={{ maxHeight: '55vh' }}>
        <div className="space-y-6">
          {photography.map((item, i) => (
            <div key={`photo-${i}`} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.caption}
                className="block"
                style={{
                  maxWidth: '100%',
                  maxHeight: '38vh',
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
                  {item.caption}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
