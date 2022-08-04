const Genres = ({ genre_ids }) => {
  const genres = [];

  for (let i = 0; i < genre_ids.length; i++) {
    const genre_id = genre_ids[i];

    switch (genre_id) {
      case 28:
        genres.push(`Action`);
        break;
      case 12:
        genres.push(`Aventure`);
        break;
      case 16:
        genres.push(`Animation`);
        break;
      case 35:
        genres.push(`Comédie`);
        break;
      case 80:
        genres.push(`Policier`);
        break;
      case 99:
        genres.push(`Documentaire`);
        break;
      case 18:
        genres.push(`Drame`);
        break;
      case 10751:
        genres.push(`Famille`);
        break;
      case 14:
        genres.push(`Fantasy`);
        break;
      case 36:
        genres.push(`Histoire`);
        break;
      case 27:
        genres.push(`Horreur`);
        break;
      case 10402:
        genres.push(`Musique`);
        break;
      case 9648:
        genres.push(`Mystère`);
        break;
      case 10749:
        genres.push(`Romance`);
        break;
      case 878:
        genres.push(`Science-fiction`);
        break;
      case 10770:
        genres.push(`Téléfilm`);
        break;
      case 53:
        genres.push(`Thriller`);
        break;
      case 10752:
        genres.push(`Guerre`);
        break;
      case 37:
        genres.push(`Western`);
        break;
      default:
        break;
    }
  }

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre} className="genre">
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
