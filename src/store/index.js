import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import { getPosts } from "../services/post";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getPosts,
      },
      serializableCheck: false,
    }),
});
