import React from 'react';
import ImageGrid from './components/ImageGrid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Image Gallery</h1>
      </header>
      <main className="p-8">
        <ImageGrid />
      </main>
    </div>
  );
};

export default App;
