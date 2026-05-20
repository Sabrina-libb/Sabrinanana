import useStore from '../../store';

function TiltedPhoto() {
  const openModal = useStore((s) => s.openModal);

  return (
    <button
      onClick={() => openModal('works-b')}
      className="clickable widget-float flex flex-col items-center gap-1 group"
      title="新媒体与内容"
    >
      <div
        className="w-[60px] h-[55px] relative transition-transform group-hover:scale-110 duration-200"
        style={{ transform: 'rotate(-6deg)' }}
      >
        {/* Photo print */}
        <div className="absolute inset-0 bg-white border-[3px] border-white shadow-lg">
          {/* Photo content */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200 to-pink-300 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
        {/* Tape */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-yellow-100/80 rounded-sm border border-yellow-200 rotate-2" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-white bg-pink-500/70 px-2 py-0.5 rounded-full font-['Press_Start_2P']">
            倾斜照片
          </span>
        </div>
      </div>
    </button>
  );
}

export default TiltedPhoto;
