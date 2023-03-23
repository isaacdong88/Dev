import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store'

function Counter() {
    //lets create out dispatch function
    const dispatch = useDispatch()
    //look at redux store
    let count = useSelector((state) => {
        return state.counterCombinedReducer.counter
    })
    // console.log(useSelector((store) => {
    //     return state
    // }))
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {
            dispatch(increment())
        }}>Increment</button>
        <button onClick={()=>{
            dispatch(decrement())
        }}>Decrement</button>
    </div>
  )
}

export default Counter