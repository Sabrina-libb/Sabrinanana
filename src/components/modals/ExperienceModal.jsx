import Modal from './Modal';

const tracks = [
  {
    title: '花房故事',
    subtitle: '拉新转化提升 20%',
    color: '#FF69B4',
    desc: '北京花房科技 · 海外市场实习 · 管理300达人 · 抖音账号冷启动',
  },
  {
    title: '致同协奏曲',
    subtitle: '清洗 1100+ 凭证',
    color: '#FF85A2',
    desc: '致同会计师事务所 · 审计助理 · Excel底稿 · 6张核心报表',
  },
  {
    title: '聚禾夏令营',
    subtitle: '互动率提升 30%',
    color: '#FFB6C1',
    desc: '5场模拟直播场控 · 策划抽奖环节 · 实时互动控场',
  },
  {
    title: '康腾数字化',
    subtitle: '三等奖 · 5000字报告',
    color: '#FF1493',
    desc: '主修数字化转型课题 · 撰写5000字调研报告 · 案例大赛获奖',
  },
];

function ExperienceModal() {
  return (
    <Modal title="MY PLAYLIST">
      <div className="space-y-4">
        {/* Vinyl Record Spinning */}
        <div className="flex justify-center py-2">
          <div className="relative w-24 h-24">
            {/* Vinyl disc */}
            <div className="vinyl-spin absolute inset-0 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#FF69B4]" />
              <div className="absolute inset-0 rounded-full border border-[#333]"
                style={{
                  background: 'repeating-radial-gradient(circle at center, transparent, transparent 9px, #2a2a2a 9px, #2a2a2a 10px)',
                }}
              />
            </div>
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FAFAFA] border border-[#ccc] z-10" />
          </div>
        </div>

        {/* Track list */}
        <div className="space-y-2">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className="flex items-start gap-3 p-3 rounded-lg border border-pink-100 bg-pink-50/30 hover:bg-pink-50/60 transition-colors"
            >
              {/* Track number */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: track.color }}
              >
                {i + 1}
              </div>
              {/* Track info */}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm text-gray-800">{track.title}</div>
                <div className="text-xs text-pink-500 font-medium">{track.subtitle}</div>
                <div className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                  {track.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ExperienceModal;
