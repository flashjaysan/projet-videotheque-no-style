import { useState } from "react";

import MovieSearchBar from "./MovieSearchBar";
import MoviesList from "../common/MoviesList";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("descending");

  return (
    <main>
      <MovieSearchBar setMovies={setMovies} setSortingOrder={setSortingOrder} />
      <MoviesList sortingOrder={sortingOrder} movies={movies} />
    </main>
  );
};

export default Main;
