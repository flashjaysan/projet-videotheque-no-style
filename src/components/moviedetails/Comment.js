const Comment = ({ nickname, comment }) => {
  return (
    <>
      <p className="nickname">{nickname}</p>
      <p className="comment_data">{comment}</p>
    </>
  );
};

export default Comment;
