import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl'>Mardown Editor</h1>

        <nav>
          <Link to={'/'} className='mx-2'>Home</Link>
          <Link to={'/about'} className='mx-2'>About</Link>
        </nav>
    </header>
  )
}

export default Header