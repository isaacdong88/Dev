import React from 'react'

function MovieDisplay({currentmovie}) {
    const loaded = () => {
        return (
            <div>
                <h1>{currentmovie.Title}</h1>
                <h2>{currentmovie.Year}</h2>
                <img src={currentmovie.Poster} alt="" />
            </div>
        )
    }

    const loading = () => {
        return (
            <div>
                <h1>No Movie To Display</h1>
            </div>
        )
    }

  return (
    currentmovie ? loaded() : loading()
  )
}

export default MovieDisplay