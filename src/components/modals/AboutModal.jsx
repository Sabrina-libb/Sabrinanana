import Modal from './Modal';

function AboutModal() {
  return (
    <Modal title="ABOUT ME">
      <div className="space-y-5">
        {/* Header */}
        <div className="text-center pb-3 border-b border-pink-200">
          <h2 className="text-2xl font-bold text-pink-600 mb-1">李茜 Sabrina</h2>
          <p className="text-xs text-gray-500">21岁 · 江西财经大学 · 会计学 ACCA 方向</p>
          <p className="text-xs text-gray-400">2022.09 - 2026.06 · 本科</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'ACCA 10/13 门',
            'CET-6',
            '计算机二级',
            '优秀团员',
            '优秀运动员',
            '商业案例大赛三等奖',
          ].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 border border-pink-200"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bio */}
        <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-100">
          <h3 className="font-bold text-pink-500 mb-2 text-xs uppercase tracking-wider">
            关于我
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">
            我是 Sabrina，一名来自江西财经大学会计学 ACCA
            方向的大四学生。热爱数据、创意与挑战，始终在探索商业与数字化的交叉领域。
            拥有扎实的财务审计功底与丰富的新媒体运营经验，正在寻找能将理性分析与感性创意完美结合的职业舞台。
          </p>
        </div>

        {/* Contact */}
        <div className="text-center text-xs text-gray-400 pt-2 border-t border-pink-100">
          <p>夏天、海滩、小猫北北，还有无限的可能性。</p>
        </div>
      </div>
    </Modal>
  );
}

export default AboutModal;
