import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeskScene from './components/DeskScene';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaded = useCallback(() => setIsLoading(false), []);

  return (
    <BrowserRouter>
      {isLoading && <WelcomeScreen onLoaded={handleLoaded} />}
      <Routes>
        <Route path="/*" element={<DeskScene />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
