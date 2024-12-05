import React from 'react';

interface RecipeCardProp{
    title: string;
    image: string;
}

const RecipeCard: React.FC<RecipeCardProp> = ({title, image}) => {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md'>
        <img src={image} alt='image' className='w-full h-48 object-cover' /> 
        <div className='p-4'>
            <h2 className='font-bold text-lg'>{title}</h2>
        </div>
    </div>
  )
}

export default RecipeCard;