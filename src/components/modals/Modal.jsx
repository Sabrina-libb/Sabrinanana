import useStore from '../../store';

function Modal({ title, children }) {
  const closeModal = useStore((s) => s.closeModal);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Window */}
      <div
        className="relative w-[520px] max-h-[72vh] bg-[#FAFAFA] rounded-lg flex flex-col overflow-hidden"
        style={{
          boxShadow:
            '0 0 0 2px #666, 0 0 0 5px #CCC, 0 0 0 7px #666, 8px 8px 24px rgba(0,0,0,0.35)',
        }}
      >
        {/* Title bar */}
        <div
          className="h-[38px] min-h-[38px] flex items-center px-3 relative border-b border-[#999] flex-shrink-0"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px), linear-gradient(180deg, #ECECEC 0%, #D4D4D4 40%, #BEBEBE 100%)',
          }}
        >
          <div className="flex gap-1.5 z-10">
            <span
              className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/20 cursor-pointer"
              onClick={closeModal}
            />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
            <span className="w-3 h-3 rounded-full bg-[#28CA41] border border-black/20" />
          </div>
          <span
            className="absolute left-1/2 -translate-x-1/2 text-[10px] text-[#2a2a2a] whitespace-nowrap"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            {title}
          </span>
        </div>

        {/* Content */}
        <div
          className="flex-1 overflow-y-auto p-6 text-sm text-gray-800 modal-scroll"
          style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
