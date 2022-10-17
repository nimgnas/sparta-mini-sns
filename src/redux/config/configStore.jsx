import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../modules/posts";
import logger from "redux-logger";

const reducer = combineReducers({
    postReducer: postReducer.reducer
});

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})