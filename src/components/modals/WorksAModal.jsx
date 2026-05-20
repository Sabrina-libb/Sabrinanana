import Modal from './Modal';

function WorksAModal() {
  return (
    <Modal title="DATA & AUDIT">
      <div className="space-y-5">
        {/* Header */}
        <div className="text-center pb-3 border-b border-pink-200">
          <h2 className="text-xl font-bold text-pink-600 mb-1">致同会计师事务所 · 重庆分所</h2>
          <p className="text-xs text-gray-500">审计助理</p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { num: '1100+', label: '财务凭证' },
            { num: '1400+', label: '页资料' },
            { num: '40%', label: '效率提升' },
          ].map((m) => (
            <div key={m.label} className="bg-pink-50 rounded-lg p-3 border border-pink-100">
              <div className="text-xl font-bold text-pink-600">{m.num}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">
              核心工作
            </h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>2天内完成 1100+ 份财务凭证的清洗、扫描与分类管理</li>
              <li>整理 1400 页审计资料并建立结构化电子底稿</li>
              <li>通过 Excel 规范归档使检索效率提升 40%</li>
            </ul>
          </div>

          <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
            <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">
              专业技能
            </h3>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>熟练运用 VLOOKUP、SUMIFS 及数据透视表</li>
              <li>独立编制 6 张核心财务报表</li>
              <li>主修 Python（93分）· 雅思英语专题（97分）</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default WorksAModal;
