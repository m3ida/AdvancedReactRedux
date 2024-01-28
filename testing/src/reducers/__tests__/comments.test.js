import { createAction } from "@reduxjs/toolkit";
import commentsReducer, { saveComment } from "../commentsReducer";

it("handles actions of type comments/save", () => {
  const newState = commentsReducer([], saveComment("New Comment"));

  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], createAction("random action"));

  expect(newState).toEqual([]);
});
