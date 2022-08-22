import { useContext } from "react";
import { collection, addDoc } from "firebase/firestore";

import { context } from "../../context";

const CommentForm = ({ movieId }) => {
  let comment = "";

  const { db, userId } = useContext(context);

  const commentsCollection = collection(db, "comments");

  const addComment = (e) => {
    e.preventDefault();

    addDoc(commentsCollection, {
      user_id: userId,
      movie_id: movieId,
      comment: comment,
    }).then(() => {
      //vide
    });
  };

  return (
    <>
      {userId === null ? (
        <p>Connectez vous pour ajouter un commentaire</p>
      ) : (
        <form className="comment-form" onSubmit={addComment}>
          <textarea
            name="comment"
            className="comment_zone"
            rows="10"
            cols="30"
            onChange={(e) => {
              comment = e.target.value;
            }}
          >
            Saisissez votre commentaire ici.
          </textarea>
          <input type="submit" value="Poster" />
        </form>
      )}
    </>
  );
};

export default CommentForm;
