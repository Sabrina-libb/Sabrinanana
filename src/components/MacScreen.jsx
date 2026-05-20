import IslandScene from './IslandScene';

function MacScreen() {
  return (
    <div className="mac-window">
      <div className="mac-titlebar">
        <div className="mac-dots">
          <span className="mac-dot mac-dot--red" />
          <span className="mac-dot mac-dot--yellow" />
          <span className="mac-dot mac-dot--green" />
        </div>
        <span className="mac-title">
          WELCOME TO SABRINA&apos;S SUMMER BEACH
        </span>
      </div>
      <div className="mac-content">
        <IslandScene />
      </div>
    </div>
  );
}

export default MacScreen;
