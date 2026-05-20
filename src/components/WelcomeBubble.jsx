import { useState, useEffect } from 'react';
import { useWindowStore } from '../windowStore';

function WelcomeBubble() {
  const [dismissed, setDismissed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const hasClicked = useWindowStore((s) => s.hasClicked);

  useEffect(() => {
    if (hasClicked && !dismissed) {
      setFadingOut(true);
      const t = setTimeout(() => setDismissed(true), 500);
      return () => clearTimeout(t);
    }
  }, [hasClicked, dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`welcome-bubble${fadingOut ? ' welcome-bubble-dismiss' : ''}`}
      style={{
        position: 'absolute',
        left: '50%',
        top: '4%',
        transform: 'translateX(-50%)',
        zIndex: 25,
        background: '#FFFAFD',
        border: '2px solid #FF1493',
        borderRadius: '8px',
        padding: '10px 16px',
        maxWidth: '88%',
        boxShadow: '0 4px 16px rgba(255,20,147,0.2), 0 0 0 3px rgba(255,182,193,0.12)',
        animation: 'welcomeBubbleFloat 3.5s ease-in-out infinite',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-9px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid #FF1493',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '8px solid #FFFAFD',
        }}
      />

      <p
        className="font-bold"
        style={{
          fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
          fontSize: '13px',
          color: '#C2185B',
          lineHeight: '2',
          margin: 0,
          textAlign: 'center',
        }}
      >
        👩🏻‍💻 Sabrina & 🐱 北北：欢迎来到我的个人网站！
      </p>
      <p
        className="font-bold"
        style={{
          fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
          fontSize: '13px',
          color: '#C2185B',
          lineHeight: '2',
          margin: '6px 0 0 0',
          textAlign: 'center',
        }}
      >
        点击旁边的物件可以解锁不同的秘密板块哦
      </p>
    </div>
  );
}

export default WelcomeBubble;
