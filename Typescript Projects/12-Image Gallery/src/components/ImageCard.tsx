import React from 'react'

interface ImageProps{
  image: {
    id: string,
    urls: {small: string};
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageProps> = ({image}) => {
  return (
    <div className='overflow-hidden bg-white shadow-md rounded-lg'>
      <img src={image.urls.small} alt={image.alt_description} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <p className='text-sm text-gray-600'>{image.alt_description || 'Untitled'}</p>
      </div>
    </div>
  )
}

export default ImageCard;