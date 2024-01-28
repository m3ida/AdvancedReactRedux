import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchComments, saveComment } from "../reducers/commentsReducer";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Call an action creator
    //And save the comment
    dispatch(saveComment(comment));

    setComment("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Enter a comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button
        onClick={() => {
          dispatch(fetchComments());
        }}
      >
        Fetch comments
      </button>
    </>
  );
};

export default CommentBox;
