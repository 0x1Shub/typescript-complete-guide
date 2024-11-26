import React from 'react'

interface QuoteProps {
    quote: string;
    author: string;
}

const QuoteDisplay: React.FC<QuoteProps> = ({quote, author}) => {
  return (
    <div className='quote-container'>
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
    </div>
  )
}

export default QuoteDisplay