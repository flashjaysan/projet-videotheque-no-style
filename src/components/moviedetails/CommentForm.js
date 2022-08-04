const CommentForm = ({ movieId }) => {
  return (
    <form className="comment-form">
      <input className="comment_zone" type="text" />
      <button className="valid_button">Poster</button>
    </form>
  );
};

export default CommentForm;
