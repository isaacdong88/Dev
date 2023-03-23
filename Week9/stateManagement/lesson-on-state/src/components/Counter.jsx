import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/CounterContext'

function Counter() {
    const {count, increment,decrement} = useContext(CountContext)
  return (
    <div>
        <h1>{count}</h1>
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