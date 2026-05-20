/* ── Neon number highlighter ── */
function Score({ value, label }) {
  return (
    <div className="text-center bg-pink-50/60 rounded-lg p-3 border border-pink-200">
      <div
        className="font-bold"
        style={{
          fontFamily: "'Press Start 2P', 'Chicago', monospace",
          fontSize: '22px',
          color: '#FF1493',
          textShadow: '0 0 12px rgba(255,20,147,0.6), 0 0 24px rgba(255,105,180,0.35)',
        }}
      >
        {value}
      </div>
      <div className="text-[9px] text-gray-500 mt-1.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Full-width image card with Y2K polaroid frame ── */
function ImageCard({ src, label }) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-pink-200 bg-white"
      style={{
        filter: 'drop-shadow(3px 5px 10px rgba(0,0,0,0.35)) drop-shadow(0 1px 4px rgba(255,105,180,0.2))',
      }}
    >
      {/* Y2K inner frame border */}
      <div className="p-2" style={{ background: 'linear-gradient(180deg, #FFF0F5, #FFF)' }}>
        <div className="border border-pink-100 rounded p-1 bg-white">
          <img
            src={src}
            alt={label}
            className="w-full h-auto block"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback placeholder */}
          <div
            className="hidden items-center justify-center text-center"
            style={{ minHeight: '160px', background: '#FFF0F5' }}
          >
            <span className="text-[10px] text-pink-400 px-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              {label}
              <br />
              <span className="text-[8px] text-gray-400">(pending upload)</span>
            </span>
          </div>
        </div>
      </div>
      {/* Label bar */}
      <div className="px-3 py-2 border-t border-pink-100" style={{ background: '#FFFAFD' }}>
        <span className="text-[10px] text-pink-500 font-medium" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

const galleryImages = [
  { src: '/图片1.png', label: 'Python Script Execution — Data Cleaning & Variance Logging' },
  { src: '/图片2.png', label: 'Excel Data Cleansing Pipeline — Raw-to-Structured Transformation' },
  { src: '/图片3.png', label: 'Pivot Table Analysis — Multi-Dimensional Financial Summary' },
  { src: '/图片4.png', label: 'Financial Reporting Chart — Visual Performance Dashboard' },
  { src: '/图片5.png', label: 'Cost Variance Dashboard — Budget vs. Actual Tracking' },
  { src: '/图片6.jpg', label: 'AR Aging Visualization — Credit & Collections Management' },
];

function DataAnalysis() {
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
            📊 TECH & DATA ANALYSIS // 数据分析能力板块
          </p>
          <p
            className="text-center mt-1"
            style={{
              fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
              fontSize: '13px',
              color: '#888',
            }}
          >
            纯技术硬实力看板。精通 Python 自动化脚本与高级 Excel 数据清理建模，技术底稿直铺呈现。
          </p>
        </div>

        <div className="p-6 overflow-y-auto modal-scroll" style={{ maxHeight: '55vh' }}>
          {/* ── Header ── */}
          <div className="text-center pb-4 border-b border-pink-200 mb-5">
          <h2
            className="font-bold text-pink-600 mb-1"
            style={{
              fontFamily: "'Press Start 2P', 'Chicago', monospace",
              fontSize: '11px',
              textShadow: '0 0 10px rgba(255,20,147,0.3)',
            }}
          >
            DATA ANALYSIS
          </h2>
          <p className="text-xs text-gray-500">Academic Excellence & Technical Competencies</p>
        </div>

        {/* ── Score Dashboard ── */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Score value="93" label="Python" />
          <Score value="94" label="Financial Reporting" />
          <Score value="90" label="Audit & Assurance" />
        </div>

        {/* ── Metrics Strip ── */}
        <div
          className="grid grid-cols-4 gap-2 mb-6 p-3 rounded-lg border border-pink-200"
          style={{ background: 'linear-gradient(90deg, #FFF0F5, #FFE4EC, #FFF0F5)' }}
        >
          {[
            { v: '1100+', l: 'Vouchers' },
            { v: '1400', l: 'Pages' },
            { v: '+40%', l: 'Efficiency' },
            { v: '6', l: 'Reports' },
          ].map((m) => (
            <div key={m.l} className="text-center">
              <div
                className="font-bold"
                style={{
                  fontFamily: "'Press Start 2P', 'Chicago', monospace",
                  fontSize: '14px',
                  color: '#FF1493',
                  textShadow: '0 0 8px rgba(255,20,147,0.5)',
                }}
              >
                {m.v}
              </div>
              <div className="text-[8px] text-gray-500 mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {m.l}
              </div>
            </div>
          ))}
        </div>

        {/* ── Core Tech Strengths ── */}
        <div className="space-y-5 mb-6">
          {/* Python */}
          <div className="rounded-lg border border-pink-200 overflow-hidden">
            <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC)' }}>
              <h3
                className="font-bold uppercase tracking-wider"
                style={{
                  fontFamily: "'Press Start 2P', 'Chicago', monospace",
                  fontSize: '8px',
                  color: '#C2185B',
                  textShadow: '0 0 8px rgba(255,20,147,0.25)',
                }}
              >
                Advanced Python Scripting & Automation
              </h3>
            </div>
            <div className="px-4 py-3 space-y-1.5" style={{ background: '#FFFAFD' }}>
              {[
                'Data cleaning pipelines with pandas & numpy — automated variance logging and outlier detection',
                'Script execution for supplier pricing algorithms, cost deviation alerts, and threshold monitoring',
                'Financial data ETL workflows: raw extracts → structured analysis-ready datasets',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-pink-400 mt-0.5 flex-shrink-0">▹</span>
                  <span style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '12px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excel */}
          <div className="rounded-lg border border-pink-200 overflow-hidden">
            <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC)' }}>
              <h3
                className="font-bold uppercase tracking-wider"
                style={{
                  fontFamily: "'Press Start 2P', 'Chicago', monospace",
                  fontSize: '8px',
                  color: '#C2185B',
                  textShadow: '0 0 8px rgba(255,20,147,0.25)',
                }}
              >
                Power Excel & Financial Modeling
              </h3>
            </div>
            <div className="px-4 py-3 space-y-1.5" style={{ background: '#FFFAFD' }}>
              {[
                'Advanced formulas: VLOOKUP, SUMIFS, INDEX-MATCH — building dynamic tracking dashboards',
                'Pivot Table mastery: multi-dimensional financial summaries with drill-down capability',
                'Financial modeling: cost center efficiency logs, AR aging analysis, regional margin visuals',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-pink-400 mt-0.5 flex-shrink-0">▹</span>
                  <span style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '12px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Full-Size Image Gallery (waterfall / vertical stack) ── */}
        <div>
          <h4
            className="text-center font-bold text-pink-500 mb-3 uppercase tracking-wider"
            style={{
              fontFamily: "'Press Start 2P', 'Chicago', monospace",
              fontSize: '8px',
              textShadow: '0 0 6px rgba(255,105,180,0.3)',
            }}
          >
            Technical Evidence
          </h4>
          <div className="space-y-4">
            {galleryImages.map((img, i) => (
              <ImageCard key={i} src={img.src} label={img.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalysis;
