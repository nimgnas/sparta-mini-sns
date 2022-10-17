import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../modules/posts";
import logger from "redux-logger";
import commentReducer from "../modules/comments";

const reducer = combineReducers({
  postReducer: postReducer.reducer,
  commentReducer: commentReducer,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
