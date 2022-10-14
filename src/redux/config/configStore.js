import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../modules/comments";
import postsReducer from "../modules/posts";

const store = configureStore({ reducer: commentsReducer, postsReducer });

export default store;
