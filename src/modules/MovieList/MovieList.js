import React, { useState } from 'react'
import './MovieList.css'

export const MovieList = (props) => {

  const AddToWatchListComponent = props.componentWatchList;

  return (
    <div>
      {/* <div className='movies__container'>
        {props.movies.map((movie, id) => (
          <div className='MovieCard'
            key={id}
            onClick={() => props.handleWatch(movie)} >
            <img src={movie.image} className="card__image" alt="movie-image" />
            <p>{movie.title}</p>
            <AddToWatchListComponent />
          </div>
        ))
        }
      </div> */}
    </div>
  )
}
