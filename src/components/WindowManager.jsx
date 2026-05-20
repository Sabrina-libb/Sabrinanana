import { useWindowStore } from '../windowStore';
import MacWindow from './MacWindow';
import About from './About';
import Experience from './Experience';
import DataAnalysis from './DataAnalysis';
import Gallery from './Gallery';
import DesignPortfolio from './DesignPortfolio';

const windowDefs = {
  about: {
    title: 'ABOUT ME',
    content: <About />,
  },

  works: {
    title: 'DATA & AUDIT',
    content: (
      <div className="space-y-5 p-6" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '14px', color: '#374151' }}>
        <div className="text-center pb-3 border-b border-pink-200">
          <h2 className="text-xl font-bold text-pink-600 mb-1">致同会计师事务所 / 重庆分所</h2>
          <p className="text-xs text-gray-500">审计助理</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[{ num: '1100+', label: '财务凭证' }, { num: '1400+', label: '页资料' }, { num: '40%', label: '效率提升' }].map((m) => (
            <div key={m.label} className="bg-pink-50 rounded-lg p-3 border border-pink-100">
              <div className="text-xl font-bold text-pink-600">{m.num}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">核心工作</h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>2天内完成 1100+ 份财务凭证的清洗、扫描与分类管理</li>
              <li>整理 1400 页审计资料并建立结构化电子底稿</li>
              <li>通过 Excel 规范归档使检索效率提升 40%</li>
            </ul>
          </div>
          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">专业技能</h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>熟练运用 VLOOKUP、SUMIFS 及数据透视表</li>
              <li>独立编制 6 张核心财务报表</li>
              <li>主修 Python（93分）/ 雅思英语专题（97分）</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  contact: {
    title: 'CONTACT',
    content: (
      <div className="p-6 text-center space-y-4" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '14px', color: '#374151' }}>
        <div className="text-5xl">📬</div>
        <h2 className="text-xl font-bold text-pink-600">联系我</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Email: sabrinali@example.com</p>
          <p>WeChat: sabrina_li</p>
          <p>小红书: @Sabrina的夏天</p>
        </div>
        <p className="text-xs text-gray-400 pt-4 border-t border-pink-100">期待与你相遇在这个夏天 ☀️</p>
      </div>
    ),
  },

  gallery: {
    title: 'GALLERY',
    content: <Gallery />,
  },

  music: {
    title: 'MUSIC',
    content: (
      <div className="p-6 text-center space-y-4" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif", fontSize: '14px', color: '#374151' }}>
        <div className="text-5xl">🎵</div>
        <h2 className="text-xl font-bold text-pink-600">夏日歌单</h2>
        <div className="space-y-2 text-sm text-gray-600">
          {['🎧 Summertime Sadness', '🎧 Tokyo Love Hotel', '🎧 Pink Venom', '🎧 Ditto', '🎧 Cupid'].map((song) => (
            <div key={song} className="bg-pink-50 rounded-lg px-4 py-2 border border-pink-100 text-left">{song}</div>
          ))}
        </div>
      </div>
    ),
  },

  experience: {
    title: 'EXPERIENCE',
    content: <Experience />,
  },

  dataAnalysis: {
    title: 'DATA ANALYSIS',
    content: <DataAnalysis />,
  },

  designPortfolio: {
    title: 'CREATIVE ARCHIVE',
    content: <DesignPortfolio />,
  },
};

function WindowManager() {
  const openWindows = useWindowStore((s) => s.openWindows);
  const activeWindow = useWindowStore((s) => s.activeWindow);

  return (
    <>
      {Object.entries(openWindows).map(([id, isOpen]) => {
        if (!isOpen) return null;
        const def = windowDefs[id];
        if (!def) return null;
        return (
          <MacWindow key={id} id={id} title={def.title}>
            {def.content}
          </MacWindow>
        );
      })}
    </>
  );
}

export default WindowManager;
