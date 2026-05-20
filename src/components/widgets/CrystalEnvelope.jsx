import useStore from '../../store';

function CrystalEnvelope() {
  const openModal = useStore((s) => s.openModal);

  return (
    <button
      onClick={() => openModal('works-a')}
      className="clickable widget-float flex flex-col items-center gap-1 group"
      title="数据与审计"
    >
      <div className="w-[60px] h-[50px] relative transition-transform group-hover:scale-110 duration-200">
        {/* Envelope body */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg border-2 border-pink-500 shadow-md flex items-center justify-center">
          {/* Heart in center */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white/80">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        {/* Sparkle dots */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border border-pink-300 animate-pulse" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            水晶信封
          </span>
        </div>
      </div>
    </button>
  );
}

export default CrystalEnvelope;
