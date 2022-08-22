import { useState, useContext } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

import { context } from "../../context";

const Comment = ({ commentId, author, nickname, comment }) => {
  const { db, userId } = useContext(context);

  const [modifyingComment, setModifyingComment] = useState(false);

  let newComment = comment;

  const updateComment = () => {
    const documentComment = doc(db, "comments", commentId);

    updateDoc(documentComment, {
      comment: newComment,
    });
  };

  const deleteComment = () => {
    const documentComment = doc(db, "comments", commentId);

    deleteDoc(documentComment).then(() => {
      // vide
    });
  };

  return (
    <>
      {modifyingComment ? (
        <div>
          <textarea
            name="comment"
            className="comment_zone"
            rows="10"
            cols="30"
            onChange={(e) => {
              newComment = e.target.value;
            }}
          >
            {comment}
          </textarea>
          <button value="Poster" onClick={updateComment}>
            Modifier commentaire
          </button>
        </div>
      ) : (
        <p className="comment_data">
          <span className="nickname">{nickname}</span> :{" "}
          <span className="comment">{comment}</span>
        </p>
      )}
      {userId === author ? (
        <div>
          <button
            onClick={() => {
              setModifyingComment(true);
              console.log(modifyingComment);
            }}
          >
            Modifier
          </button>
          <button onClick={deleteComment}>Supprimer</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
