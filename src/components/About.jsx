function About() {
  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '13px', color: '#374151' }}>
      {/* ── Banner ── */}
      <div
        className="px-5 py-3 border-b-2 border-pink-300 flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EC, #FFF0F5)' }}
      >
        <p className="font-bold uppercase text-center" style={{ lineHeight: '1.8' }}>
            <span
              style={{
                fontFamily: "'Press Start 2P', 'Chicago', monospace",
                fontSize: '10px',
                color: '#C2185B',
              }}
            >
              👾 ABOUT SABRINA //{' '}
            </span>
            <span
              className="font-bold"
              style={{
                fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
                fontSize: '13px',
                color: '#C2185B',
              }}
            >
              关于我
            </span>
          </p>
        <p className="text-center mt-1 text-xs text-gray-500">
          复合型数据像素人类，正在探索数字与视觉的无尽边界。
        </p>
      </div>

      <div className="flex-1 flex flex-col p-6 overflow-y-auto modal-scroll space-y-5">
        {/* Top section */}
        <div className="space-y-5">
          {/* Profile header */}
          <div className="text-center pb-3 border-b border-pink-200">
            <h2 className="text-2xl font-bold text-pink-600 mb-1">李茜 Sabrina</h2>
            <p className="text-xs text-gray-500">21岁 / 江西财经大学 / 会计学 ACCA 方向</p>
            <p className="text-xs text-gray-400">2022.09 - 2026.06 / 本科</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['ACCA 10/13 门', 'CET-6', '计算机二级', '优秀团员', '优秀运动员', '商业案例大赛三等奖'].map((b) => (
              <span key={b} className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 border border-pink-200">{b}</span>
            ))}
          </div>

          {/* Greeting */}
          <p className="text-sm leading-loose text-gray-700 px-2">
            👋 嗨！我是 Sabrina（李茜），一个行走在『硬核数据清洗』与『前沿视觉审美』交叉口的复合型野生人类。
          </p>
        </div>

        {/* Core Talent Tree */}
        <div className="space-y-5 flex-1">
          <div className="px-3">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">📊 左脑理性</h3>
            <p className="text-sm leading-loose text-gray-700">
              精通 Python 自动化脚本与高级 Excel 数据建模（Python 93分 / 财务报告 94分）。能降维打击做复杂的财务审计、数据清洗与流向分析，用底稿和代码说话。
            </p>
          </div>

          <div className="px-3">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">🎨 右脑感性</h3>
            <p className="text-sm leading-loose text-gray-700">
              天生网感敏锐，具有极强的视觉审美护城河。独立产出过大量高点击率的社团/公司视觉海报、创意排版以及先锋摄影作品，对色彩、构图和 Y2K 拟物美学有偏执的追求。
            </p>
          </div>

          <div className="px-3">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">🚀 进化型人格</h3>
            <p className="text-sm leading-loose text-gray-700">
              无边界学习者（Hyper-Learner）！愿意且极度擅长拥抱新事物。从 0 到 1 搭建品牌新媒体矩阵、主导特效滤镜开发、跨界攻克 ACCA 核心业务，我的学习习惯是『快速卷入、极限上手、硬核交付』。
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="space-y-4">
          <div className="text-center px-3 py-3 border-t border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">🪐 生存格言</h3>
            <p className="text-sm leading-loose text-gray-700">
              用数据编织逻辑，用审美打破沉闷。保持好奇，拒绝敷衍，全速奔跑中！
            </p>
          </div>

          <div className="text-center text-xs text-gray-400 pt-2 border-t border-pink-100">
            <p>夏天、海滩、小猫北北，还有无限的可能性。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
