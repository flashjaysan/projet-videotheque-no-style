import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import MovieDetails from "../components/moviedetails/MovieDetails";
import Comments from "../components/moviedetails/Comments";
import Footer from "../components/footer/Footer";

const DetailsFilm = () => {
  const { movieId } = useParams();

  return (
    <>
      <Header />
      <main>
        <MovieDetails movieId={movieId} />
        <Comments movieId={movieId} />
      </main>
      <Footer />
    </>
  );
};

export default DetailsFilm;
