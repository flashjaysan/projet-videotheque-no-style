import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import MovieDetails from "../components/moviedetails/MovieDetails";
import Footer from "../components/footer/Footer";

const DetailsFilm = () => {
  const { movieId } = useParams();

  return (
    <>
      <Header />
      <MovieDetails movieId={movieId} />
      <Footer />
    </>
  );
};

export default DetailsFilm;
