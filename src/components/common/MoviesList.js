import MovieCard from "./MovieCard";

const MoviesList = ({ sortingOrder, movies }) => {
  return (
    <div className="container">
      <div className="columns">
        {movies
          .sort((a, b) => {
            switch (sortingOrder) {
              case "descending":
                return b.vote_average - a.vote_average;
              case "ascending":
                return a.vote_average - b.vote_average;
              default:
                return 0;
            }
          })
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
