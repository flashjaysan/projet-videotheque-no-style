import { useState, useEffect, useContext } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";

import { context } from "../../context";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);

  const { db } = useContext(context);

  let nickname = "none";

  useEffect(() => {
    const getCommentsFromFirestore = async () => {
      const commentsCollection = collection(db, "comments");
      const q = query(commentsCollection, where("movie_id", "==", movieId));
      const commentsSnapshots = await getDocs(q);

      commentsSnapshots.forEach(async (doc) => {

        // const getNicknameFromFirestore = async (userId) => {
        //   const usersCollection = collection(db, "users");
        //   const q = query(usersCollection, where("user_id", "==", userId));
        //   const usersSnapshots = await getDocs(q);

        //   usersSnapshots.forEach((doc) => {
        //     return doc.data().nickname;
        //   });
        // }
        const getNicknameFromFirestore = async (userId) => {
          const usersCollection = collection(db, "users");
          const q = query(usersCollection, where("user_id", "==", userId));
          const usersSnapshots = await getDocs(q);
          return usersSnapshots.docs[0].data().nickname;
        }

        const dataWithId = {id: doc.id, ...doc.data()};
        const userId = dataWithId.user_id;
        const nickname = await getNicknameFromFirestore(userId);

        setComments((previous) => {
          const fullData = {nickname: nickname, ...dataWithId};
          console.log(fullData);
          return [...previous, fullData];
        });
      });
    };

    getCommentsFromFirestore();
  }, []);

  return (
    <div className="comments-section">
      <CommentForm movieId={movieId} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="comment">
              <Comment nickname={nickname} comment={comment.comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
