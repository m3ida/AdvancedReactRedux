import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import commentsReducer from "./reducers/commentsReducer";

function Root({ children, initialState }) {
  return (
    <Provider
      store={configureStore({
        reducer: {
          comments: commentsReducer,
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(reduxPromise),
      })}
    >
      {children}
    </Provider>
  );
}

export default Root;
