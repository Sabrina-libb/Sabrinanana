function SwanPhoto() {
  return (
    <button
      className="clickable widget-float flex flex-col items-center gap-1 group"
      title="天鹅湖"
      onClick={() => alert('🦢 天鹅湖的夏日回忆 — 拍摄于厦门鼓浪屿')}
    >
      <div className="w-[60px] h-[50px] relative transition-transform group-hover:scale-110 duration-200">
        {/* Photo frame */}
        <div className="absolute inset-0 bg-white rounded border-2 border-gray-300 shadow-md overflow-hidden">
          {/* Swan silhouette scene */}
          <div className="absolute inset-1 rounded bg-gradient-to-b from-blue-200 to-blue-400 flex items-end justify-center">
            {/* Swan */}
            <svg viewBox="0 0 40 30" className="w-8 h-6 mb-1">
              <path
                d="M5,20 Q10,10 20,8 Q30,6 35,12 Q38,15 35,18 Q32,14 28,12 Q22,10 18,12 Q12,14 5,20Z"
                fill="white"
                stroke="#ccc"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            天鹅湖
          </span>
        </div>
      </div>
    </button>
  );
}

export default SwanPhoto;
