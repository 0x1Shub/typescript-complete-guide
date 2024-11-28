import React from 'react'

interface NoteProps {
    note: string;
    onDelete: () => void;
}

const Note : React.FC<NoteProps> = ({note, onDelete}) => {
  return (
    <div className='note'>
        <p>{note}</p>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Note