import React from 'react'
import { useContext } from 'react'
import CheeseContext from '../context/CheeseContext'
import MangoContext from '../context/MangoContext'

function Grandchild(props) {
    const cheeseData = useContext(CheeseContext)
    const fruitData = useContext(MangoContext)
    console.log(cheeseData)
    console.log(props.data)
  return (
    <div className='grandchild'>
        <h2>GrandChild Component</h2>
        <p>My favorite cheese is {cheeseData}</p>
        <p>My favorite fruit is {fruitData}</p>
    </div>
  )
}

export default Grandchild