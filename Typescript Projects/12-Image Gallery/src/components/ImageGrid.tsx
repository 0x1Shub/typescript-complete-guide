import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import ImageCard from './ImageCard';

const ImageGrid: React.FC = () => {
  const { images, loading, error } = useFetchImages();

  if (loading) return <p className="text-center">Loading images...</p>;
  if (error) return <p className="text-center text-red-500">Error loading images.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
