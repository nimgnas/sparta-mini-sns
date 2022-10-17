import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3003/posts";

export const __getPost = createAsyncThunk("GET_POST", async () => {
    const res = await axios.get(`${URL}`);
    return res.data;
});

export const __addPost = createAsyncThunk("ADD_POST", async (newPost) => {
    const res = await axios.post(`${URL}`, {
        name: newPost.name,
        content: newPost.content
    });
    return res.data;
});

export const __deletePost = createAsyncThunk("DELETE_POST", async ({id}) => {
    const res = await axios.delete(`${URL}/${id}`);
    return id;
})


export const postReducer = createSlice({
    name: "posts",
    initialState:[],
    reducers:{},
    extraReducers:{

        [__getPost.fulfilled]: (state, {payload}) => [...payload],
        [__addPost.fulfilled]: (state, {payload}) => [...state, payload],
        [__deletePost.fulfilled]: (state, { payload }) => state.filter((post) => post.id !== payload)

    },
});

export default postReducer.reducer;