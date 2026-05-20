import { useState } from 'react';
import useStore from '../store';

function Cat() {
  const [clicked, setClicked] = useState(false);
  const setIsCatHovered = useStore((s) => s.setIsCatHovered);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setIsCatHovered(true);
    setTimeout(() => {
      setClicked(false);
      setIsCatHovered(false);
    }, 1000);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute clickable"
      title="北北"
      style={{
        width: '9%',
        height: '14%',
        left: '42%',
        top: '14%',
        zIndex: 15,
        background: 'transparent',
        borderRadius: '50%',
        transition: 'box-shadow 0.15s ease-out',
        boxShadow: clicked
          ? '0 0 24px 8px rgba(255,105,180,0.5), 0 0 48px 16px rgba(255,105,180,0.25)'
          : 'none',
      }}
    />
  );
}

export default Cat;
