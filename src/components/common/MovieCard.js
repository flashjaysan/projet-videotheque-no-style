import { NavLink } from "react-router-dom";

import Genres from "./Genres";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <NavLink to={`/detailsfilm/${movie.id}`}>
        <h2>{movie.title}</h2>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "./images/Poster.jpg"
          }
          alt={`Affiche du film ${movie.title}`}
        />
        <Genres genre_ids={movie.genre_ids} />
        <h4>
          {movie.vote_average}/10 <span>⭐</span>
        </h4>
      </NavLink>
    </div>
  );
};

export default MovieCard;
