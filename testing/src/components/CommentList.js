import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.comments);

  return (
    <div>
      <ul>
        {comments?.map((comment, i) => (
          <li key={i}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
