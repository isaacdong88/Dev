import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'

function Counter() {
    // const context = useContext(CounterContext)
    const {counter, increment, decrement} = useContext(CounterContext)
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => {
            return increment()
        }}>Increment</button>
        <button onClick={() => {
            return decrement()
        }}>Decrement</button>
    </div>
  )
}

export default Counter