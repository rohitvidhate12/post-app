import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../services/post";

const initialState = {
  postList: [],
  filteredPostList: [],
  loading: false,
};

export const getPostList = createAsyncThunk("fetch/posts", async (thunkAPI) => {
  const response = await getPosts();
  console.log({ response });
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    searchPosts: (state, { payload }) => {
      const text = payload;
      console.log({ text });
      let list = state.postList;
      if (text) {
        list = state.postList.filter(
          (x) => x.title.includes(text) || x.body.includes(text)
        );
      }
      state.filteredPostList = [...list];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPostList.fulfilled, (state, { payload }) => {
      console.log({ payload });
      if (payload) {
        state.postList = payload;
        state.filteredPostList = payload;
      }
      state.loading = false;
    });
    builder.addCase(getPostList.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { searchPosts } = postSlice.actions;

export default postSlice.reducer;
