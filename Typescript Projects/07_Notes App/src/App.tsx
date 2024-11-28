import { useEffect, useState } from 'react';
import './App.css';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if(storedNotes){
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if(newNote.trim()){
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  }

  const deleteNode =(index: number) => {
    const updatesNote = notes.filter((_, i) => i !== index);
    setNotes(updatesNote);
  }

  return (
    <div className='app'>
     <h1>Notes App</h1>
     <input 
      type="text" 
      value={newNote} 
      onChange={(e) => setNewNote(e.target.value)} 
      placeholder='Write your note here...' />
      <button onClick={addNote}>Add Note</button>
      <div className='notes-container'>
        {notes.map((note, index) => (
          <Note key={index} note={note} onDelete={() => deleteNode(index)} /> 
        ))}
      </div>
    </div>
  )
}

export default App
