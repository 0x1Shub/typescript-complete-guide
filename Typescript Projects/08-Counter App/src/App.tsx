import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState<number>(0)

  const increament = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <Counter count={count} increament={increament} decrement={decrement} reset={reset} />
    </div>
  )
}

export default App
