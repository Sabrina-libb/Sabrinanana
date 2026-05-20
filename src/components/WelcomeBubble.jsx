function WelcomeBubble() {
  return (
    <div
      className="welcome-bubble"
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
      }}
    >
      {/* Bottom arrow */}
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
          margin: '8px 0 0 0',
          textAlign: 'center',
        }}
      >
        📸 拍立得 → 实习经历
        <br />
        ✉️ 信封 → 数据能力
        <br />
        🐱 小猫照片 → About Me
        <br />
        🗺️ 拍立得相纸 → 照片集
        <br />
        🎵 MP3 → 个人作品
      </p>
    </div>
  );
}

export default WelcomeBubble;
