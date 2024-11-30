import React from 'react'

interface ToolbarProps{
    onBold: () => void;
    onItalic: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({onBold, onItalic}) => {
  return (
    <div className='bg-gray-200 p-2 flex gap-4'>
        <button onClick={onBold} className='btn'>Bold</button>
        <button onClick={onItalic} className='btn'>Italic</button>
    </div>
  )
}

export default Toolbar;