import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Call an action creator
    //And save the comment

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter a comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CommentBox;
