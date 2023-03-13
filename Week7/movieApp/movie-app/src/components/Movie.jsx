import React from 'react'

function Movie(props) {
  return (
    <div className='movie-item' onClick={props.toggle}>
        <img src={props.poster.Poster} alt="" />
    </div>
  )
}

export default Movie