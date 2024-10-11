// src/App.tsx
import React from 'react';
import Weather from './components/Weather';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
};

export default App;
