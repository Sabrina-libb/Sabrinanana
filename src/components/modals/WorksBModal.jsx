import Modal from './Modal';

function WorksBModal() {
  return (
    <Modal title="MEDIA & CONTENT">
      <div className="space-y-5">
        {/* Header */}
        <div className="text-center pb-3 border-b border-pink-200">
          <h2 className="text-xl font-bold text-pink-600 mb-1">北京花房科技有限公司</h2>
          <p className="text-xs text-gray-500">海外市场实习生</p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { num: '300', label: '管理达人' },
            { num: '20%', label: '拉新转化' },
            { num: '30%', label: '互动提升' },
            { num: '1000+', label: '涨粉' },
          ].map((m) => (
            <div key={m.label} className="bg-pink-50 rounded-lg p-3 border border-pink-100">
              <div className="text-lg font-bold text-pink-600">{m.num}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">
              海外市场运营
            </h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>管理 300 位达人，深度优化脚本使拉新转化提升 20%</li>
              <li>从 0 到 1 搭建抖音官方账号体系</li>
              <li>高频神回复运营使互动率提升 30%，涨粉 1000+</li>
              <li>策划站内 Tag 话题使发帖活跃度提升 23%</li>
            </ul>
          </div>

          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">
              优迈创意协会 · 公关部部长
            </h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>设计 12 张活动海报</li>
              <li>撰写 8 篇推文，最高阅读量 500+</li>
              <li>活动参与率提升 40%</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default WorksBModal;
