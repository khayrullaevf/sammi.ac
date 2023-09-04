import React from 'react'
 import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
const MovieList = ({data,onDelete}) => {
  return (
    <ul className="movie-list">
      {data.map((movie) => (
        <MovieListItem
          key={movie.id}
          name={movie.name}
          viewers={movie.viewers}
          favourite={movie.favourite}
          onDelete={()=>onDelete(movie.id)}
        />
      ))}
    </ul>
  );
}

export default MovieList