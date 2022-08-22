import { useState, useEffect, useContext } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";

import { context } from "../../context";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);

  const { db } = useContext(context);

  useEffect(() => {
    console.log(comments);
    // récupération des commentaires du film 'movieId'
    const commentsCollection = collection(db, "comments");
    const q = query(commentsCollection, where("movie_id", "==", movieId));
    getDocs(q).then((commentsSnapshots) => {
      commentsSnapshots.forEach((doc) => {
        const commentId = doc.id;
        const commentUserId = doc.data().user_id;
        const commentMessage = doc.data().comment;

        // récupération du pseudo associé à l'auteur du commentaire
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("user_id", "==", commentUserId));
        getDocs(q).then((usersSnapshots) => {
          const commentNickname = usersSnapshots.docs[0].data().nickname;

          // ajout du commentaire complet au state 'comments'
          setComments((previous) => {
            const newComment = {
              id: commentId,
              authorId: commentUserId,
              nickname: commentNickname,
              comment: commentMessage,
            };

            return [...previous, newComment];
          });
        });
      });
    });
  }, []);

  return (
    <div className="comments-section">
      <CommentForm movieId={movieId} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="comment">
              <Comment
                commentId={comment.id}
                author={comment.authorId}
                nickname={comment.nickname}
                comment={comment.comment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
