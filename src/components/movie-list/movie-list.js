import React from 'react'
 import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data}) => {
  return (
    <ul className="movie-list">
      {
        data.map(movie=>(
          <MovieListItem key={movie.id} favourite={movie.favourite} name={movie.name} viewers={movie.viewers}/>

        ))}


    </ul>
  );
}

export default MovieList