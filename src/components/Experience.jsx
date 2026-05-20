import { useState } from 'react';

/* ── Neon metric highlighter ── */
function Metric({ value, label }) {
  return (
    <div className="text-center">
      <span
        className="font-bold"
        style={{
          fontFamily: "'Press Start 2P', 'Chicago', monospace",
          fontSize: '16px',
          color: '#FF1493',
          textShadow: '0 0 10px rgba(255,20,147,0.5), 0 0 20px rgba(255,105,180,0.3)',
        }}
      >
        {value}
      </span>
      <div className="text-[9px] text-gray-500 mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

const tabs = [
  {
    id: 'huafang',
    label: '花房科技  |  Overseas MKT',
    period: '2025.12 — 2026.02',
    role: '海外市场实习生',
    location: '北京',
    metrics: [
      { value: '300+', label: '核心达人' },
      { value: '+20%', label: '转化率提升' },
      { value: '30%', label: '互动率' },
      { value: '+23%', label: 'UGC增幅' },
      { value: '1000+', label: '新增粉丝' },
    ],
    sections: [
      {
        title: 'KOL / KOC Management',
        items: [
          '管理统筹 300+ 核心达人资源，精细化匹配品牌调性',
          '优化创意脚本与内容精准投放，驱动用户获取转化率提升 20%',
          '建立达人分层激励机制，提升长期合作粘性与复投率',
        ],
      },
      {
        title: 'TikTok / Douyin Brand Operations',
        items: [
          '从零搭建抖音官方品牌矩阵，策划高互动评论区运营策略',
          '打造品牌人设化评论互动，粉丝参与率提升至 30%',
          '持续输出品牌短视频内容，累计收获 1000+ 忠实粉丝',
        ],
      },
      {
        title: 'Product & UGC Operations',
        items: [
          '策划站内全站 Tag 挑战赛，带动 UGC 投稿活跃度增长 23%',
          '主导贴纸 / 滤镜特效开发上线，优化积分商城提升用户留存',
          '跨部门协作推动产品功能迭代，持续优化端内活动转化漏斗',
        ],
      },
    ],
  },
  {
    id: 'grant',
    label: '致同会计所  |  Audit Assistant',
    period: '2024.06 — 2024.09',
    role: '审计助理',
    location: '重庆',
    metrics: [
      { value: '1100+', label: '财务凭证' },
      { value: '1400页', label: '审计资料' },
      { value: '+40%', label: '检索效率' },
      { value: '6', label: '核心监控报表' },
    ],
    sections: [
      {
        title: 'Data Processing & Digital Mgmt',
        items: [
          '2天内完成 1100+ 份财务凭证、合同及银行流水的归集分类',
          '扫描整理 1400 页审计资料，建立结构化电子工作底稿',
          '通过 Excel 规范归档流程，资料检索效率提升 40%',
        ],
      },
      {
        title: 'Data Visualization & Reporting',
        items: [
          '精通 Excel VLOOKUP、SUMIFS 及数据透视表数据分析',
          '独立编制 6 张核心财务监控报告及投资监测报表',
          '将复杂原始审计数据转化为清晰、直观的可视化表格结构',
        ],
      },
      {
        title: 'Fieldwork & Collaboration',
        items: [
          '独立前往现场完成存货 / 固定资产全流程实地盘点',
          '与客户财务部门无缝协调，确保财务合规与数据完整性',
          '参与审计底稿交叉复核，保证工作质量符合审计准则',
        ],
      },
    ],
  },
];

function Experience() {
  const [activeTab, setActiveTab] = useState('huafang');
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <div className="flex flex-col" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '13px', color: '#374151' }}>
      {/* ── Y2K Pixel Tab Switcher ── */}
      <div className="flex border-b-2 border-pink-300 bg-pink-50/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 px-4 py-3 font-bold tracking-wide transition-all duration-200 relative"
            style={{
              fontFamily: "'Press Start 2P', 'Chicago', monospace",
              fontSize: '16px',
              lineHeight: '1.6',
              color: activeTab === tab.id ? '#FF1493' : '#999',
              background: activeTab === tab.id ? '#FFF' : 'transparent',
              borderBottom: activeTab === tab.id ? '3px solid #FF1493' : '3px solid transparent',
              textShadow: activeTab === tab.id ? '0 0 8px rgba(255,20,147,0.3)' : 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

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
              💼 MY INTERNSHIP EXPERIENCE //{' '}
            </span>
            <span
              className="font-bold"
              style={{
                fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
                fontSize: '13px',
                color: '#C2185B',
              }}
            >
              实习经历板块
            </span>
          </p>
          <p
            className="text-center mt-1"
            style={{
              fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
              fontSize: '13px',
              color: '#888',
            }}
          >
            记录我在新媒体海外运营与专业财务审计领域的跨界成长，点击标签可自由切换。
          </p>
        </div>

        {/* ── Tab Content ── */}
        <div className="p-6 overflow-y-auto modal-scroll" style={{ maxHeight: '52vh' }}>
          {/* Header */}
          <div className="text-center pb-4 border-b border-pink-100 mb-5">
          <h2 className="text-xl font-bold text-pink-600 mb-1.5">{current.role}</h2>
          <p className="text-xs text-gray-500">
            {current.label.split('|')[0].trim()} · {current.location}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{current.period}</p>
        </div>

        {/* Metrics Dashboard */}
        <div
          className="grid gap-2 mb-6"
          style={{ gridTemplateColumns: `repeat(${current.metrics.length}, 1fr)` }}
        >
          {current.metrics.map((m) => (
            <Metric key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {current.sections.map((sec) => (
            <div key={sec.title} className="bg-pink-50/40 rounded-lg p-4 border border-pink-100">
              <h3
                className="font-bold text-pink-500 mb-2.5 uppercase tracking-wider"
                style={{
                  fontFamily: "'Press Start 2P', 'Chicago', monospace",
                  fontSize: '8px',
                  textShadow: '0 0 6px rgba(255,105,180,0.3)',
                }}
              >
                {sec.title}
              </h3>
              <ul className="space-y-1.5">
                {sec.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
