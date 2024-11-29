import React from 'react'

interface CounterProps {
    count: number;
    increament: () => void;
    decrement: () => void;
    reset: () => void;
}

const Counter: React.FC<CounterProps> = ({count, increament, decrement, reset}) => {
  return (
    <div className='counter'>
        <h1>Counter: {count}</h1>
        <button onClick={increament}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter