import React from 'react'
import Grandchild from './Grandchild'

function Child(props) {
  return (
    <div className='child'>
        <h2>Child Component</h2>
        <Grandchild data={props.cheese}/>
    </div>
  )
}

export default Child