import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-blue-600 text-white text-center py-4">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
    </header>
    <main className="p-8">
      <Home />
    </main>
  </div>
);

export default App;
