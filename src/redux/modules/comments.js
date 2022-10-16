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
      return thunkAPI.fulfillWithValue(payload);
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

// reducer 함수
const pendingReducer = (state) => {
  state.isLoading = true;
};

const fulfilledReducer = (state, action) => {
  const getIndex = (id) => {
    return state.comments.findIndex((comment) => comment.id === id);
  };

  switch (action.type) {
    case "comments/getComments/fulfilled":
      state.comments = action.payload;
      break;
    case "comments/addComment/fulfilled":
      state.comments.push(action.payload);
      break;
    case "comments/deleteComment/fulfilled":
      state.comments.splice(getIndex(action.payload), 1);
      break;
    case "comments/updateComment/fulfilled":
      state.comments.splice(getIndex(action.payload.id), 1, action.payload);
      break;
    default:
      return state;
  }
  state.isLoading = false;
};

const rejectedReducer = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

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
    [__getComments.pending]: pendingReducer,
    [__getComments.fulfilled]: fulfilledReducer,
    [__getComments.rejected]: rejectedReducer,

    [__addComment.pending]: pendingReducer,
    [__addComment.fulfilled]: fulfilledReducer,
    [__addComment.rejected]: rejectedReducer,

    [__deleteComment.pending]: pendingReducer,
    [__deleteComment.fulfilled]: fulfilledReducer,
    [__deleteComment.rejected]: rejectedReducer,

    [__updateComment.pending]: pendingReducer,
    [__updateComment.fulfilled]: fulfilledReducer,
    [__updateComment.rejected]: rejectedReducer,
  },
});

export default commentsSlice.reducer;
