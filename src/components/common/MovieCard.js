import { NavLink } from "react-router-dom";

import Genres from "./Genres";

const MovieCard = ({ movie }) => {
  return (
    <div className="column col-6">
      <NavLink to={`/detailsfilm/${movie.id}`} className="card">
        <div className="card-header">
          <h2 className="card-title">{movie.title}</h2>
        </div>
        <div className="card-image">
          <img
            className="img-responsive"
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "./images/Poster.jpg"
            }
            alt={`Affiche du film ${movie.title}`}
          />
        </div>
        <div className="card-body">
          <Genres genre_ids={movie.genre_ids} />
          <h4>{movie.vote_average}/10 ⭐</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCard;
