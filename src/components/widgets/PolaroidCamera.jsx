import useStore from '../../store';

function PolaroidCamera() {
  const openModal = useStore((s) => s.openModal);

  return (
    <button
      onClick={() => openModal('about')}
      className="clickable widget-float flex flex-col items-center gap-1 group"
      title="关于我"
    >
      {/* Camera icon */}
      <div className="w-[60px] h-[50px] relative transition-transform group-hover:scale-110 duration-200">
        <div className="absolute inset-0 bg-[#FFB6C1] rounded-lg border-2 border-[#FF69B4] shadow-md" />
        {/* Lens */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FF1493] border-2 border-white flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white/60" />
        </div>
        {/* Flash */}
        <div className="absolute top-0 right-1.5 w-2.5 h-2 rounded-sm bg-yellow-300 border border-yellow-400" />
        {/* Label tag */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            拍立得
          </span>
        </div>
      </div>
    </button>
  );
}

export default PolaroidCamera;
