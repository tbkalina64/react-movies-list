import React from 'react'
import './MovieList.css'

export const MovieList = ({ mock, componentWatchList, handleWatch }) => {

  const AddToWatchList = componentWatchList;
  // console.log(mock);
  // console.log(AddToWatchList);


  return (
    <div>
      <div className='movies__container'>
        {mock.map((movie, id) => (
          <div className='MovieCard' key={id} onClick={() => handleWatch(movie)}>
            <img src={movie.image} className="card__image" alt="movie-image" />
            <p>{movie.title}</p>
            <AddToWatchList />
          </div>
        ))}
      </div>
    </div>
  )
}
