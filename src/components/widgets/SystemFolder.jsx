function SystemFolder() {
  return (
    <button
      className="clickable widget-float flex flex-col items-center gap-1 group"
      title="系统文件夹"
      onClick={() => alert('📁 Sabrina 的项目文件夹：ACCA · 审计 · 新媒体 · Python · 更多精彩内容整理中…')}
    >
      <div className="w-[60px] h-[50px] relative transition-transform group-hover:scale-110 duration-200">
        {/* Folder tab */}
        <div className="absolute top-0 left-1 w-5 h-2 bg-blue-400 rounded-t-sm border border-blue-500" />
        {/* Folder body */}
        <div className="absolute top-1.5 inset-x-0 bottom-0 bg-blue-300 rounded border-2 border-blue-500 shadow-md flex items-center justify-center">
          {/* Folder content peek */}
          <div className="w-8 h-1 bg-white/50 rounded mb-1" />
          <div className="w-6 h-1 bg-white/50 rounded mb-1 absolute bottom-1.5" />
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            系统文件夹
          </span>
        </div>
      </div>
    </button>
  );
}

export default SystemFolder;
