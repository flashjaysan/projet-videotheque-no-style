import { useContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { context } from "../../context";

const FavoriteMovies = () => {
  const { db, userId } = useContext(context);

  const [moviesIds, setMoviesIds] = useState([]);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(false);

  useEffect(() => {
    const getFavoriteMoviesIds = async () => {
      const favoriteMoviesCollection = await collection(db, "favorite_movies");

      const q = await query(
        favoriteMoviesCollection,
        where("user_id", "==", userId)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        const documents = querySnapshot.docs;
        return await documents[0].data().favorite_movies;
      }

      return [];
    };

    setMoviesIds(getFavoriteMoviesIds());
    console.log(moviesIds);
  }, [userId, db]);

  return (
    <main>
      <h2>Vos films favoris</h2>
    </main>
  );
};

export default FavoriteMovies;
