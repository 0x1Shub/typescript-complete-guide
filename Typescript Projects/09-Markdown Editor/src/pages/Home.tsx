import React from 'react'
import Toolbar from '../components/Toolbar'
import MarkdownEditor from '../components/MarkdownEditor'

const Home: React.FC = () => {

    const handleBold = () => {
        console.log('Bold');
    }

    const handleItalic = () => {
        console.log('Italic');
    }

  return (
    <main className='p-4'>
        <Toolbar onBold={handleBold} onItalic={handleItalic} />
        <div className='flex flex-grow'>
        <MarkdownEditor /> 
        </div>
        
    </main>
  )
}

export default Home