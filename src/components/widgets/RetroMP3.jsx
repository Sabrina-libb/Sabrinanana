import { useState, useEffect } from 'react';
import useStore from '../../store';

function RetroMP3() {
  const openModal = useStore((s) => s.openModal);
  const isCatHovered = useStore((s) => s.isCatHovered);
  const [showToast, setShowToast] = useState(false);
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    if (isCatHovered) {
      setShowToast(true);
      setToastKey((k) => k + 1);
      const timer = setTimeout(() => setShowToast(false), 3200);
      return () => clearTimeout(timer);
    }
  }, [isCatHovered]);

  return (
    <div className="relative">
      {/* MP3 Player */}
      <button
        onClick={() => openModal('experience')}
        className="clickable widget-float flex flex-col items-center gap-1 group"
        title="履历歌单"
      >
        <div
          className={`w-[65px] h-[55px] relative transition-all duration-300 group-hover:scale-110 rounded-lg border-2 shadow-md flex flex-col items-center justify-center ${
            isCatHovered
              ? 'bg-pink-300 border-pink-500 shadow-pink-400/50 shadow-lg'
              : 'bg-gray-700 border-gray-500'
          }`}
        >
          {/* Screen */}
          <div
            className={`w-[50px] h-[18px] rounded-sm border flex items-center justify-center overflow-hidden transition-colors duration-300 ${
              isCatHovered
                ? 'bg-pink-100 border-pink-400'
                : 'bg-gray-800 border-gray-600'
            }`}
          >
            {isCatHovered ? (
              <span className="marquee-text text-[7px] text-pink-600 font-bold whitespace-nowrap font-['Press_Start_2P']">
                ♪ 北北正在欣赏你的歌单 ♪
              </span>
            ) : (
              <span className="text-[7px] text-gray-400 font-['Press_Start_2P']">
                ♪ STANDBY
              </span>
            )}
          </div>
          {/* Buttons */}
          <div className="flex gap-1.5 mt-1.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isCatHovered ? 'bg-pink-500' : 'bg-gray-500'
              }`}
            />
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isCatHovered ? 'bg-pink-500 animate-pulse' : 'bg-gray-500'
              }`}
            />
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isCatHovered ? 'bg-pink-500' : 'bg-gray-500'
              }`}
            />
          </div>
        </div>

        <div className="whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            Retro MP3
          </span>
        </div>
      </button>

      {/* Toast notification */}
      {showToast && (
        <div
          key={toastKey}
          className="toast-pop fixed bottom-8 left-1/2 z-[100] bg-[#1a1a1a]/90 text-white px-5 py-3 rounded-lg border border-pink-400 shadow-2xl backdrop-blur-sm"
          style={{
            boxShadow: '0 0 20px rgba(255,105,180,0.3), 0 0 40px rgba(255,105,180,0.1)',
          }}
        >
          <p className="text-sm whitespace-nowrap" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            叮！北北觉得你的数据能力很赞，并向你投喂了一颗海星⭐
          </p>
        </div>
      )}
    </div>
  );
}

export default RetroMP3;
