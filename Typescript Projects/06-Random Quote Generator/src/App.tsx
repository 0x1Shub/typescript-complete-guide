import { useEffect, useState } from 'react'
import './App.css'
import QuoteDisplay from './components/QuoteDisplay'
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const fetchRandomQuote = async() => {
    try{
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    }catch(err){
      console.log('Error fetching quote: ', err);
    }
  }

  useEffect(()=>{
    fetchRandomQuote();
  }, []);

  return (
    <div className='app'>
      <h1>Random Quote Generator</h1>
      <QuoteDisplay quote={quote} author={author} /> 
      <button onClick={fetchRandomQuote}>Get New Quotes</button>
    </div>
  )
}

export default App
