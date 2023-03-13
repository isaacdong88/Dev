import React from 'react'
import Ratings from './Ratings'

function MovieDisplay({currentmovie}) {
    const loaded = () => {
        if(currentmovie.Error === 'Movie not found!' || currentmovie.Error === 'Incorrect IMDb ID.' || currentmovie.Poster === 'N/A') {
            return (
                <div className='movie-Display'>
                    <div className='poster'>
                        <img src='https://e0.pxfuel.com/wallpapers/429/397/desktop-wallpaper-error-phone-background-poster-movie-posters-error-404-thumbnail.jpg' alt="" />  
                    </div>
                    <div className='summary'>
                        <div className='title'>
                            Error Movie Info Not Available!
                        </div>
                    </div>
                </div>
            )    
        } else {
            return (
                <div className='movie-Display'>
                    <div className='poster'>
                        <img src={currentmovie.Poster} alt="" />  
                    </div>
                    <div className='summary'>
                        <div className='title'>
                            {currentmovie.Title} ({currentmovie.Year})
                        </div>
                        <div className='runtime'>
                            <div className='time'>
                                Runtime: {currentmovie.Runtime}
                            </div>
                            <div>
                                <Ratings currentmovie={currentmovie}/>
                            </div>
                        </div>
                        <div className='plot'>
                            {currentmovie.Plot}
                        </div>
                    </div>
                </div>
            )
        }
    }

    const loading = () => {
        return (
            <div>
            </div>
        )
    }

  return (
    currentmovie ? loaded() : loading()
  )
}

export default MovieDisplay