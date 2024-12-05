import React from 'react'

interface searchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({onSearch}) => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value;
        onSearch(query);
    }

  return (
    <form onSubmit={handleSearch} className='flex gap-2 mb-6'>
        <input 
            type="text" 
            name='search' 
            placeholder='Search for a recipe' 
            className='border rounded p-2 w-full' 
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
            Search
        </button>
    </form>
  )
}

export default SearchBar    