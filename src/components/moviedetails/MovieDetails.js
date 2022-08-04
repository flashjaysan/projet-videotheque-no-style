import { useState, useEffect } from "react";

import axios from "axios";

const MovieDetails = ({ movieId }) => {
  const [isPending, setIsPending] = useState(false);
  const [movie, setMovie] = useState({});

  const dateFormater = (date) => {
    const [year, month, day] = date.split("-");

    return [day, month, year].join("/");
  };

  useEffect(() => {
    setIsPending(true);
    const tmdbApiRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;

    axios
      .get(tmdbApiRequest)
      .then((res) => {
        setMovie(res.data);
        setIsPending(false);
      })
      .catch((error) => {
        console.log(`Impossible d'obtenir le film ${movieId}.`);
        setIsPending(false);
      });
  }, []);

  return (
    <main>
      {isPending && <p>Chargement des données du film {movieId}</p>}
      {movie ? (
        <div className="detail_page">
          <div className="detail_part_left">
            <h1 className="title">{movie.title}</h1>
            <div className="film_poster">
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
            {movie.release_date ? (
              <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
            ) : (
              ""
            )}
            {movie.genres ? (
              <ul>
                {movie.genres.map((genre) => {
                  return (
                    <li key={genre.id} className="genre">
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <p className="stars">
              {movie.vote_average}/10 <span>⭐</span>
            </p>
            <p className="heart">❤️</p>
          </div>
          <div className="detail_part_right">
            <div className="movie_detail">
              {movie.overview ? (
                <div>
                  <h3>Synopsis</h3>
                  <p>{movie.overview}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </main>
  );
};

export default MovieDetails;
