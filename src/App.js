import React, { useState, useEffect } from 'react';
import { Header } from './modules/Header'
import { MovieList } from './modules/MovieList'
// import { mock } from './api/mock'
import { AddToWatchListComponent } from './modules/AddToWatchListComponent'
import { removeFromList } from './modules/removeFromList'
import { Loader } from './modules/Loader';
import './styles.css'
import { getMedias } from "./api/";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {
    getMedias()
      .then((movies) => {
        setMovies(movies)
        setLoading(false)
      })
  }, []);

  useEffect(() => {
    const favouritesMovie = JSON.parse(
      localStorage.getItem('List-of-movies-and-shows')
    );
    setFavourites(favouritesMovie);
  }, []);

  const saveToLocalStorage = (itemsMovie) => {
    localStorage.setItem('List-of-movies-and-shows', JSON.stringify(itemsMovie))
  };

  const addToList = (movie) => {
    const newWatchList = [...movies, movie.id];
    setFavourites(newWatchList);
    // saveToLocalStorage(newWatchList);
  };

  const DeleteFromWatchList = (movie) => {
    const newWatchList = favourites.filter(
      (favourite) => favourite.id !== movie.id);
    setFavourites(newWatchList);
    // saveToLocalStorage(newWatchList);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <h1>List of movies and shows</h1>

        {loading && <Loader />}
        {movies.length ? (
          <MovieList
            movies={setMovies}
            componentWatchList={AddToWatchListComponent}
            handleWatch={addToList}
          />) : (loading ? null : <p>List of movies and shows is empty</p>)}
      </div>
      <div className='container favourite-list'>
        <h1>Watch List</h1>
        <MovieList
          movies={favourites}
          componentWatchList={removeFromList}
          handleWatch={DeleteFromWatchList}
        />
      </div>
    </>
  )
}
export default App;