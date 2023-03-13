import React from 'react'

function Button(props) {
  return (
    <div className="button" onClick={props.toggle}>{props.genre}</div>
  )
}

export default Button