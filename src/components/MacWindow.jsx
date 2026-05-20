import { useState, useRef, useEffect } from 'react';
import { useWindowStore } from '../windowStore';

function MacWindow({ id, title, children }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const setActive = useWindowStore((s) => s.setActive);
  const activeWindow = useWindowStore((s) => s.activeWindow);

  const [pos, setPos] = useState(() => ({
    x: (window.innerWidth - window.innerWidth * 0.715) / 2 + (Math.random() - 0.5) * 40,
    y: (window.innerHeight - window.innerHeight * 0.825) / 2 + (Math.random() - 0.5) * 30,
  }));

  const dragRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const isActive = activeWindow === id;

  const onMouseDown = (e) => {
    setActive(id);
    const rect = dragRef.current.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      ref={dragRef}
      onMouseDown={() => setActive(id)}
      className="fixed flex flex-col overflow-hidden"
      style={{
        left: pos.x,
        top: pos.y,
        width: '71.5vw',
        minWidth: '660px',
        height: '82.5vh',
        minHeight: '440px',
        zIndex: isActive ? 100 : 90,
        background: '#FAFAFA',
        borderRadius: '8px',
        boxShadow:
          '0 0 0 2px #666, 0 0 0 5px #CCC, 0 0 0 7px #666, 8px 8px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Titlebar */}
      <div
        onMouseDown={onMouseDown}
        className="flex items-center px-3 relative flex-shrink-0 border-b border-[#999] select-none"
        style={{
          height: '38px',
          minHeight: '38px',
          background: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px), linear-gradient(180deg, #ECECEC 0%, #D4D4D4 40%, #BEBEBE 100%)`,
          cursor: 'move',
        }}
      >
        {/* Dots */}
        <div className="flex gap-[7px] items-center z-10">
          <div
            onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
            className="w-3 h-3 rounded-full border border-black/20 flex-shrink-0 cursor-pointer"
            style={{ background: '#FF5F57' }}
          />
          <div className="w-3 h-3 rounded-full border border-black/20 flex-shrink-0" style={{ background: '#FFBD2E' }} />
          <div className="w-3 h-3 rounded-full border border-black/20 flex-shrink-0" style={{ background: '#28CA41' }} />
        </div>
        {/* Title */}
        <span
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center tracking-[0.5px]"
          style={{
            fontFamily: "'Press Start 2P', 'Chicago', 'Courier New', monospace",
            fontSize: '10px',
            color: '#2a2a2a',
            textShadow: '0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto" style={{ background: '#FFF' }}>
        {children}
      </div>
    </div>
  );
}

export default MacWindow;
