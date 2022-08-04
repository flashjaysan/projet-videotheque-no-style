import { useState, useEffect } from "react";
import axios from "axios";

const MovieSearchBar = ({ setMovies, setSortingOrder }) => {
  const [search, setSearch] = useState("citizen kane");
  const [topButtonActive, setTopButtonActive] = useState(true);

  useEffect(() => {
    const tmdbApiRequest = `https://api.themoviedb.org/3/search/movie?api_key=653b5baee25572caf2d0ff68ef6950b8&query=${search}&language=fr-FR`;

    axios
      .get(tmdbApiRequest)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(
          "Impossible d'effectuer la recherche de films avec ce critère."
        );
      });
  }, [search]);

  return (
    <div className="card">
      <div className="card-body">
        <form
          className="form-group"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="form-input"
            type="text"
            placeholder="NOM DE FILM"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <div className="btn-group p-centered">
          <button
            className={"btn" + (topButtonActive ? "active" : "")}
            onClick={() => {
              setTopButtonActive(true);
              setSortingOrder("descending");
            }}
          >
            TOP
          </button>
          <button
            className={"btn" + (topButtonActive ? "" : "active")}
            onClick={() => {
              setTopButtonActive(false);
              setSortingOrder("ascending");
            }}
          >
            FLOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchBar;
