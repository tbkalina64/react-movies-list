import React, { useState, useEffect } from 'react';
import { Header } from './modules/Header'
import { MovieList } from './modules/MovieList'
import { mock } from './api/mock'
import { AddToWatchList } from './modules/AddToWatchList'
import { RemoveFromWatchList } from './modules/RemoveFromWatchList'
import './styles.css'
import { getMedias } from "./api/";


getMedias()
  .then(console.log(mock, 'getMedias'))
  .catch(console.error);

const App = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favouritesMovie = JSON.parse(
      localStorage.getItem('List-of-movies-and-shows')
    );

    setFavourites(favouritesMovie);
  }, []);

  const saveToLocalStorage = (itemsMovie) => {
    localStorage.setItem('List-of-movies-and-shows', JSON.stringify(itemsMovie))
  };

  const addToWatchList = (movie) => {
    const newWatchList = [...favourites, movie];
    setFavourites(newWatchList);
    // console.log('add');
    saveToLocalStorage(newWatchList);
  };

  const DeleteFromWatchList = (movie) => {
    const newWatchList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newWatchList);
    // console.log('bye')
    saveToLocalStorage(newWatchList);

  };


  return (
    <>
      <Header />
      <div className='container'>
        <h1>List of movies and shows</h1>
        <MovieList
          mock={mock}
          componentWatchList={AddToWatchList}
          handleWatch={addToWatchList} />

      </div>
      <div className='container favourite-list'>
        <h1>Watch List</h1>
        <MovieList
          mock={favourites}
          componentWatchList={RemoveFromWatchList}
          handleWatch={DeleteFromWatchList}
        />
      </div>
    </>
  )
}
export default App;