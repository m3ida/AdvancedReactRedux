import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const saveComment = createAction("comments/save");

const fetchComments = createAsyncThunk("comments/fetch", async () => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );
  return response.data.map((el) => el.name);
});

const commentsReducer = createReducer([], (builder) => {
  builder.addCase(saveComment, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(fetchComments.fulfilled, (state, action) => {
    return [...state, ...action.payload];
  });
});

export { saveComment, fetchComments };

export default commentsReducer;
