import MovieCard from "./MovieCard";

const MoviesList = ({ sortingOrder, movies }) => {
  return (
    <div>
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
  );
};

export default MoviesList;
