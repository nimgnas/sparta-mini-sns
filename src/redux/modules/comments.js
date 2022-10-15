import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/comments";

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      // postId 값을 받아 postId 와 일치하는 post의 comment목록을 불러온다.
      const { data } = await axios.get(`${URL}?postId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addComment = createAsyncThunk(
  "comments/addComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL}`, {
        userName: payload.userName,
        body: payload.body,
        postId: payload.postId,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${URL}/${payload}`);
      return thunkAPI.fulfillWithValue();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "comments/updateComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${URL}/${payload.id}`, {
        userName: payload.userName,
        body: payload.body,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// TODO: reducer 리팩토링
const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, { payload }) => {
      state.comments = payload;
      state.isLoading = false;
    },
    [__getComments.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, { payload }) => {
      state.comments.push(payload);
      state.isLoading = false;
    },
    [__addComment.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [__deleteComment.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, { payload }) => {
      const index = state.comments.findIndex(
        (comment) => comment.id === payload.id
      );
      state.comments.splice(index, 1, payload);
      state.isLoading = false;
    },
    [__updateComment.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default commentsSlice.reducer;
