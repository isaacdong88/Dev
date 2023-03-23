import React from 'react'
import Score from './Score'

function Students(props) {
  return (
    <div>
        <h1>{props.student.name}</h1>
        <p>{props.student.bio}</p>
        <Score score={props.student}/>
    </div>
  )
}

export default Students